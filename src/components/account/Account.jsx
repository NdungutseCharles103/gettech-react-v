import React, { useEffect } from "react";
import Navbar from "../Navbar";
import DashBoard from "./dashboard/dashboard";
import { api } from "../utilities/one";
import { useSelector } from "react-redux";
import { UserProvider } from "../../contexts/userContext";

const Account = (props) => {
  const { cartCount, wishCount } = props;
  const user = useSelector((state) => state.user.currentUser);

  async function getPerm() {
    const res = await api.get("/auth", {
      headers: {
        accessToken: user,
      },
    });
    const data = await res.data.message;
    console.log(data);
  }

  useEffect(() => {
    getPerm();
  }, []);

  return (
    <UserProvider>
      <Navbar cartCount={cartCount} wishCount={wishCount} />
      <DashBoard />
    </UserProvider>
  );
};

export default Account;
