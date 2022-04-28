import React from "react";
import Navbar from "../Navbar";
import DashBoard from "./dashboard/dashboard";

const Account = (props) => {
  const { cartCount, wishCount } = props;
  return (
    <div>
      <Navbar cartCount={cartCount} wishCount={wishCount} />
      <DashBoard />
    </div>
  );
};

export default Account;
