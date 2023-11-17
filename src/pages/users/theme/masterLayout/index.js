import { memo } from "react";
import Header from "../header";
import Footer from "../footer";
import InfoProducts from "../../infoProducts";

const MasterLayout = ({ children, ...props }) => {
    return (
        < div {...props}>
            <Header />
            {/*{children}*/}

            <InfoProducts />
            <Footer />
        </div>
    );
};

export default memo(MasterLayout);