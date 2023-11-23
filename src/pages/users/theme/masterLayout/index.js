import { memo } from "react";
import Header from "../header";
import Footer from "../footer";
import InfoProducts from "../../infoProducts";
import { ToastContainer } from "react-toastify";

const MasterLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Header />
      {children}

      <InfoProducts />
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default memo(MasterLayout);
