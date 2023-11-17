//content.js
import React from "react";
import './index.scss';
import { useState } from "react";

function ModalDK({ setOpenModalDK }) {
    const [checked, setChecked] = useState(false);
    return (
        <div className="overlay">

            <form>

                <button className="close-btn"
                    onClick={() => {
                        setOpenModalDK(false);
                    }}
                >
                    X
                </button>
                <div className="con">
                    <header className="head-form">
                        <h2>Đăng ký</h2>
                        <p>Điền đầy đủ các thông tin dưới đây nhé!</p>
                    </header>
                    <br></br>
                    <div className="field-set">


                        <input className="form-input" id="txt-input" type="text" placeholder="Họ và tên" required />

                        <br></br>

                        <input className="form-input" id="txt-input" type="text" placeholder="Số điện thoại đăng ký" required />

                        <br></br>

                        <input className="form-input" id="txt-input" type="text" placeholder="Gmail" required />

                        <br></br>

                        <input className="form-input" id="txt-input" type="text" placeholder="Mật khẩu" required />

                        <br></br>
                        <br></br>
                        <label className="form-input">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={(event) => setChecked(event.target.checked)}
                            />
                            Nhận tin khuyến mãi qua email
                        </label>


                        <br></br>
                        <button className="sign-in"> Tạo tài khoản </button>
                    </div>

                </div>

            </form >
        </div >
    );
}
export default ModalDK;
