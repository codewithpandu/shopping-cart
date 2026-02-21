import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartTab from "./CartTab";
import { useSelector } from "react-redux";

const Layout = () => {
  const StatusTab = useSelector((store) => store.cart.statusTab);

  return (
    <div>
      <main
        className={`w-300 max-w-full mx-auto p-5 transform ${StatusTab === false ? "" : "md:-translate-x-24"}`}
      >
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
