import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartTab from "./CartTab";

const Layout = () => {
  return (
    <div>
      <main className="w-300 max-w-full mx-auto p-5">
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
