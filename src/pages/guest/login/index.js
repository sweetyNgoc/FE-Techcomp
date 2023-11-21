//content.js
import React, { useEffect, useState } from "react";
import "./index.scss";
import { HOST } from "../../../constant/Constant";

const LoginAPI = async () => {
  try {
    const response = await fetch(HOST + "/auth/login", { method: "POST" });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

function Modal({ setOpenModal }) {
  LoginAPI();
  return (
    <div className="overlay">
      <form>
        <button
          className="close-btn"
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
            <input
              className="form-input"
              id="email"
              type="text"
              placeholder="email của bạn"
              required
            />

            <br></br>

            <input
              className="form-input"
              type="password"
              placeholder="Mật khẩu"
              id="pwd"
              name="password"
              required
            />

            <br></br>
            <button className="log-in" onClick={LoginAPI}>
              Đăng nhập
            </button>
          </div>

          <div className="other">
            <button className="btn submits frgt-pass">Quên mật khẩu</button>
            <button className="btn submits sign-up">
              Đăng ký
              <i className="fa fa-user-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Modal;
