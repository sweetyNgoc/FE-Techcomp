//content.js
import React from "react";
import "./index.scss";
import { useState } from "react";
import { HOST } from "./../../../constant/Constant";
import { toast } from "react-toastify";

function ModalDK({ setOpenModalDK }) {
  const [checked, setChecked] = useState(false);
  const [registerBody, setRegisterBody] = useState({
    name: "trieuvd",
    email: "trieuvu@gmail.com",
    phone: "0123456789",
    password: "123456",
  });

  const RegisterAPI = async (e) => {
    e.preventDefault();
    const response = await fetch(HOST + "/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(registerBody),
    }).catch((error) => {
      console.log(error);
    });

    if (response.ok) {
      (() => toast("đăng ký thành công"))();
    } else {
      (() => toast("đăng ký thất bại"))();
    }
  };

  const onRegisterBodyChange = (e) => {
    const { name, value } = e.target;
    setRegisterBody((prevRegisterBody) => ({
      ...prevRegisterBody,
      [name]: value,
    }));
  };

  return (
    <div className="overlay">
      <form>
        <button
          className="close-btn"
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
            <input
              className="form-input"
              id="name"
              name="name"
              type="text"
              placeholder="Họ và tên"
              value={registerBody.name}
              onChange={onRegisterBodyChange}
              required
            />

            <br></br>

            <input
              className="form-input"
              id="phone"
              name="phone"
              type="text"
              placeholder="Số điện thoại đăng ký"
              value={registerBody.phone}
              onChange={onRegisterBodyChange}
              required
            />

            <br></br>

            <input
              className="form-input"
              id="email"
              name="email"
              type="text"
              placeholder="Gmail"
              value={registerBody.email}
              onChange={onRegisterBodyChange}
              required
            />

            <br></br>

            <input
              className="form-input"
              id="password"
              name="password"
              type="text"
              placeholder="Mật khẩu"
              value={registerBody.password}
              onChange={onRegisterBodyChange}
              required
            />

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
            <button className="sign-in" onClick={RegisterAPI}>
              {" "}
              Tạo tài khoản{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ModalDK;
