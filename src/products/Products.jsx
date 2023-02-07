import React, { useState, useEffect } from "react";
import Nav from "../components/Navbar";
import Filter from "../components/filter";
import { api } from "../components/utilities/one";
import Sort from "../components/sort";
import ProLoader from "../components/Loaders/ProLoader";
import { compDates } from "../components/utilities/two";
import { comPrice } from "../components/utilities/two";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Sign/Footer";
import { useSelector } from "react-redux";
import { compareAndUpdate } from "../components/utilities/two";

const Products = (props) => {
	const local = useSelector((state) => state.user.isLocal);
	const [isProLoader, setProLoader] = useState(false);
	const [sorted, setSorted] = React.useState("");
	const {
		cartCount,
		filter,
		userid,
		payment,
		setPayment,
		counts,
		updateCounts,
		setFilter,
		wishCount,
		cartDecrement,
		wishIncrement,
		wishDecrement,
		cartIncrement,
		setProducts,
		products,
	} = props;

	useEffect(() => {
		handleSorted();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filter, sorted]);

	const handleSorted = () => {
		switch (sorted) {
			case "none":
				setFilter(filter);
				break;

			case "price":
				setFilter(filter.sort(compDates));
				break;
			case "date":
				setFilter(filter.sort(comPrice));
				break;

			default:
				setFilter(filter);
				break;
		}
	};
	console.log(filter);
	const fetchProducts = async () => {
		const data = await fetch("ttps://hitech-backend.onrender.com/products");
		const pros = await data.json();
		setProLoader(true);
	};
	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<div className='mb-7'>
				<Nav className='z-10' cartCount={cartCount} wishCount={wishCount} />
				<Filter products={products} />
				<div className='w-full flex items-center justify-center'>
					<Sort
						filter={products}
						setFilter={setFilter}
						sorted={sorted}
						setSorted={setSorted}
					/>
				</div>
				{isProLoader ? (
					<div className='grid px-2 pro auto-col grid-cols-6 gap-4'>
						{filter.map((product) => (
							<Test
								key={product._id}
								product={product}
								local={local}
								userid={userid}
								setProducts={setProducts}
								products={products}
								cartIncrement={cartIncrement}
								cartDecrement={cartDecrement}
								wishDecrement={wishDecrement}
								payment={payment}
								counts={counts}
								updateCounts={updateCounts}
								wishIncrement={wishIncrement}
								filter={filter}
								setFilter={setFilter}
								setPayment={setPayment}
								cartCount={cartCount}
							/>
						))}
					</div>
				) : (
					<ProLoader />
				)}
			</div>
			<Footer />
		</>
	);
};

export default Products;

function Test(props) {
	const {
		local,
		userid,
		product,
		cartDecrement,
		wishIncrement,
		filter,
		setFilter,
		cartIncrement,
		wishDecrement,
	} = props;

	const smChange = () => {
		setFilter(
			filter.map((pro) => {
				if (pro._id === product._id) {
					return {
						...pro,
						cart: !pro.cart,
						quantity: pro.quantity,
					};
				}
				return pro;
			})
		);
	};

	const cartHandler = async () => {
		setFilter(
			filter.map((pro) => {
				if (pro._id === product._id) {
					return {
						...pro,
						cart: !pro.cart,
					};
				}
				return pro;
			})
		);
		if (!product.cart) {
			cartIncrement(product.price);
			product.cart = true;
			const upPro = await compareAndUpdate(product, filter);
			if (!local) {
				await api.put(`/user/${userid}/newUpdates`, {
					products: upPro,
				});
			} else {
				localStorage.setItem("products", JSON.stringify(upPro));
			}
		} else {
			cartDecrement(1, product.price);
			product.cart = false;
			const upPro = await compareAndUpdate(product, filter);
			if (!local) {
				await api.put(`/user/${userid}/newUpdates`, {
					products: upPro,
				});
			} else {
				localStorage.setItem("products", JSON.stringify(upPro));
			}
		}
	};
	const wishHandler = async () => {
		setFilter(
			filter.map((pro) => {
				if (pro._id === product._id) {
					return {
						...pro,
						wish: !pro.wish,
					};
				}
				return pro;
			})
		);
		if (!product.wish) {
			wishIncrement();
			product.wish = true;
			const upPro = await compareAndUpdate(product, filter);
			if (!local) {
				await api.put(`/user/${userid}/newUpdates`, {
					products: upPro,
				});
			} else {
				localStorage.setItem("products", JSON.stringify(upPro));
			}
		} else {
			wishDecrement();
			product.wish = false;
			const upPro = await compareAndUpdate(product, filter);
			if (!local) {
				await api.put(`/user/${userid}/newUpdates`, {
					products: upPro,
				});
			} else {
				localStorage.setItem("products", JSON.stringify(upPro));
			}
		}
	};
	const cartBtnClass = product.cart ? "bx bx-x added" : "bx bx-cart-add";
	const cartBtnTitle = product.cart ? "view cart" : "add to cart";
	const wishBtnClass = product.wish
		? "bx bx-list-minus added wish"
		: "bx bx-list-plus";
	const wishBtnTitle = product.wish
		? "remove from wishlist"
		: "add to wishlist";
	return (
		<div
			className='card text-sm  justify-between  bg-slate-100 cursor-pointer hover:scale-[1.05] duration-300 shadow-xl
mt-3 flex flex-col items-center p-2 w-full'
		>
			<Link
				title='click for more details'
				to={`/preview/${product._id}`}
				className='flex h-[65%] items-center flex-col w-full bg-white'
			>
				<img className='h-full' src={product.image} alt='' />
			</Link>
			<Link to={`/preview/${product._id}`} className='py-2 text-center'>
				{product.name}
			</Link>
			<div className='acts mx-auto flex items-center w-full px-2 justify-between'>
				<button
					onClick={wishHandler}
					title={wishBtnTitle}
					className={`flex rbtns p-2 text-3xl bg-slate-300 items-center rounded-full  ${wishBtnClass}`}
				></button>
				<Link to={`/preview/${product._id}`} className='flex items-center'>
					${product.price}
				</Link>
				<button
					onClick={cartHandler}
					title={cartBtnTitle}
					className={`flex lbtns text-3xl items-center p-2 ml-2 bg-blue-600 rounded-full ${cartBtnClass}`}
				></button>
			</div>
		</div>
	);
}
