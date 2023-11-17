import { memo } from "react";
import {
    AiOutlineShoppingCart,
} from "react-icons/ai";
import './index.scss';
import zalo from '../../../../assets/users/footer/zalo.webp';
//import logo from '../../../../assets/users/Techcomp.png';
import GHN from '../../../../assets/users/footer/GHN.png';
import GHTK from '../../../../assets/users/footer/GHTK.png';
import GHEMS from '../../../../assets/users/footer/GHEMS.png';
import i1 from '../../../../assets/users/footer/1.png';
import i2 from '../../../../assets/users/footer/2.png';
import i3 from '../../../../assets/users/footer/3.png';
import CN from '../../../../assets/users/footer/chứng nhận.png';
import i5 from '../../../../assets/users/footer/5.png';
import i6 from '../../../../assets/users/footer/6.png';
import i7 from '../../../../assets/users/footer/7.png';
import i8 from '../../../../assets/users/footer/8.png';
import i9 from '../../../../assets/users/footer/9.png';
import i10 from '../../../../assets/users/footer/10.png';


const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h4>VỀ TZ.STORE</h4>
                            <ul className="li-style">
                                <li>
                                    <a href="#">Giới thiệu</a>
                                </li>
                                <li>
                                    <a href="#">Tuyển dụng</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>TỔNG ĐÀI HỖ TRỢ</h4>
                            <ul className="li-style link-no-underline">
                                <li>
                                    <span>Gọi mua:      </span>
                                    <a href="#" className="link-no-underline" >0987654321</a>
                                </li>
                                <li>
                                    <span>Chăm sóc KH:      </span>
                                    <a href="#" className="link-no-underline">19001000</a>
                                </li>
                                <li>
                                    <span>Email:      </span>
                                    <a href="#" className="link-no-underline">tz.store@gmail.com </a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>ĐƠN VỊ VẬN CHUYỂN</h4>
                            <ul className="li-style flex-sty">
                                <li>
                                    <img src={GHN} width={70} alt="GHN"></img>
                                </li>
                                <li>
                                    <img src={GHTK} width={70} alt="GHTK"></img>
                                </li>
                                <li>
                                    <img src={GHEMS} width={70} alt="GHEMS"></img>
                                </li>
                            </ul>
                            <br></br>
                            <h4>CÁCH THỨC THANH TOÁN</h4>
                            <ul className="li-style flex-sty">
                                <li>
                                    <img src={i5} width={70} alt="i5"></img>
                                </li>
                                <li>
                                    <img src={i6} width={70} alt="i6"></img>
                                </li>
                                <li>
                                    <img src={i7} width={70} alt="i7"></img>
                                </li>
                                <li>
                                    <img src={i8} width={70} alt="i8"></img>
                                </li>
                            </ul>

                            <ul className="li-style flex-sty margin10">

                                <li>
                                    <img src={i9} width={70} alt="i9"></img>
                                </li>
                                <li>
                                    <img src={i10} width={70} alt="i10"></img>
                                </li>
                            </ul>
                            <br></br>
                        </div>
                    </div>
                    <div className="line-horizontal">
                    </div>
                    <div className=" flex-sty li-style ">
                        <h4 >Kết nối với chúng tôi:<p>  </p></h4>
                        <ul class="social-links li-style flex-sty ">
                            <li>
                                <img src={i1} width={50} alt="i1"></img>
                            </li>
                            <li>
                                <img src={i2} width={50} alt="i2"></img>
                            </li>
                            <li>
                                <img src={i3} width={50} alt="i3"></img>
                            </li>

                        </ul>
                    </div>
                </div>
            </footer>

            <div class="messenger">
                <img src={zalo} width={50} alt="zalo" />
            </div>
        </>
    )

};

export default memo(Footer);