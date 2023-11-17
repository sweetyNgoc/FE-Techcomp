//content.js
import React from "react";
import './index.scss';
function Modal({ setOpenModal }) {
    return (
        <div className="overlay">

            <form>

                <button className="close-btn"
                    onClick={() => {
                        setOpenModal(false);
                    }}
                >
                    X
                </button>
                <div className="con">
                    <header className="head-form">
                        <h2>Đăng nhập</h2>
                        <p>Hãy nhập Số điện thoại và Mật khẩu của bạn.</p>
                    </header>
                    <br></br>
                    <div className="field-set">


                        <input className="form-input" id="txt-input" type="text" placeholder="Số điện thoại của bạn" required />

                        <br></br>



                        <input className="form-input" type="password" placeholder="Mật khẩu" id="pwd" name="password" required />


                        <br></br>
                        <button className="log-in"> Đăng nhập </button>
                    </div>

                    <div className="other">
                        <button className="btn submits frgt-pass">Quên mật khẩu</button>
                        <button className="btn submits sign-up">Đăng ký
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                        </button>
                    </div>

                </div>

            </form>
        </div>
    );
}
export default Modal;
