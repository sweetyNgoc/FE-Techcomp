import { Dropdown } from 'react-bootstrap';
import { useState } from "react";
import { memo } from "react";
//import Popup from "reactjs-popup";
import {
    AiOutlineSearch,
    AiOutlineCustomerService,
    AiOutlineEnvironment,
    AiOutlineFileSearch,
    AiOutlineShoppingCart,
    AiOutlineFundProjectionScreen,
    AiOutlineDollar,
    AiOutlineSafety,
} from "react-icons/ai";
import './index.scss';
import logo from '../../../../assets/users/Techcomp.png';
import Modal from '../../../guest/login/index'
import ModalDK from '../../../guest/signin/index'
import video from '../../../../assets/users/video/topHeader.mp4';



const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalDKOpen, setModalDKOpen] = useState(false);
    return (
        <>
            <div className="header_top">
                <video src={video} autoPlay loop></video>
            </div>
            {/* 1########################################*/}
            <div className="color-coll fixed-div">
                <div className="container ">
                    <div className="coll-header abc">
                        <div >
                            <div className="header__logo abc">
                                <img width="100px" src={logo} alt='logo' />
                            </div>
                        </div>
                        <div className="abc" >
                            <Dropdown className="color-coll">
                                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                    Danh mục
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Laptop</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Điện thoại</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Ipad</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <nav>
                            <div className='coll-header--search'>
                                <input type="text" placeholder="Search..." />
                                <AiOutlineSearch className='coll-header--search-icon' />
                            </div>
                        </nav>
                        <div >
                            <ul className="menu">
                                <li>
                                    <span><AiOutlineCustomerService /></span>
                                    Hotline: 09116688
                                </li>
                                <li>
                                    <span><AiOutlineEnvironment /></span>
                                    Hệ thống Showroom
                                </li>
                                <li>
                                    <span><AiOutlineFileSearch /></span>
                                    Tra cứu đơn hàng
                                </li>
                                <li>
                                    <span><AiOutlineShoppingCart /></span>
                                    Giỏ hàng
                                </li>
                            </ul>
                        </div>
                        <div className="abc" >
                            <Dropdown className="color-coll">
                                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                    Đăng nhập
                                </Dropdown.Toggle>

                                <div>
                                    <Dropdown.Menu>
                                        <Dropdown.ItemText>Xin chào, vui lòng chọn!</Dropdown.ItemText>
                                        <div className="dropDN">
                                            <button
                                                className="openModalBtn"
                                                onClick={() => {
                                                    setModalOpen(true);
                                                }}
                                            >
                                                Đăng nhập
                                            </button>
                                            <button
                                                className="openModalBtn"
                                                onClick={() => {
                                                    setModalDKOpen(true);
                                                }}
                                            >
                                                Đăng ký
                                            </button>


                                        </div>
                                    </Dropdown.Menu>
                                </div>

                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2########################################*/}
            <div>
                <div className="container">
                    <ul className="list-st-top">
                        <li>
                            <span><AiOutlineSearch /></span>
                            <span>Tổng hợp khuyến mãi</span>
                        </li>
                        <li>
                            <span><AiOutlineFundProjectionScreen /></span>
                            <span>Tin công nghệ</span>
                        </li>
                        <li>
                            <span><AiOutlineDollar /></span>
                            <span>Hướng dẫn thanh toán</span>
                        </li>
                        <li>
                            <span><AiOutlineSearch /></span>
                            <span>Hướng dẫn trả góp</span>
                        </li>
                        <li>
                            <span><AiOutlineSafety /></span>
                            <span>Chính sách bảo hành</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* 2.1########################################*/}


            {/* Đăng nhập */}
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            {/* Đăng ký */}
            {modalDKOpen && <ModalDK setOpenModalDK={setModalDKOpen} />}

        </>

    )
}

export default memo(Header);