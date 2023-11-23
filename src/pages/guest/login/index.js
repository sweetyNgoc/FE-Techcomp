//content.js
import React, { useEffect, useState } from "react";
import "./index.scss";
import { HOST } from "../../../constant/Constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Modal({ setOpenModal, userInfo, setUserInfo }) {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const LoginAPI = async (e) => {
    e.preventDefault();
    let data;
    try {
      const bodyReq = {
        email: email,
        password: password,
      };
      const response = await fetch(HOST + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyReq),
      });
      data = await response.json();
      if (response.ok) {
        localStorage.setItem("userInfo", data);
        setUserInfo(data);
        setOpenModal(false);
        (() => toast("đăng nhập thành công"))();
      } else {
        console.log(data);
        (() => toast(data?.message))();
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

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
            <p>Hãy nhập Email và Mật khẩu của bạn.</p>
          </header>
          <br></br>
          <div className="field-set">
            <input
              className="form-input"
              id="email"
              type="text"
              placeholder="email của bạn"
              name="email"
              value={email}
              onChange={onEmailChange}
              required
            />

            <br></br>

            <input
              className="form-input"
              type="password"
              placeholder="Mật khẩu"
              id="pwd"
              name="password"
              value={password}
              onChange={onPasswordChange}
              required
            />

            <br></br>
            <button className="log-in" onClick={(e) => LoginAPI(e)}>
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
