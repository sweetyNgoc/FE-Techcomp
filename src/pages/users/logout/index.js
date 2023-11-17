import { memo } from "react";

const Login = () => {
    return (
        <>
            <div class="container">
                <div class="login-form">
                    <h1>Đăng nhập</h1>
                    <form action="/login" method="post">
                        <input type="email" name="email" placeholder="Email">
                            <input type="password" name="password" placeholder="Mật khẩu">
                                <button type="submit">Đăng nhập</button>
                            </input>
                        </input>
                    </form>
                    <div class="message"></div>
                </div>
            </div>
        </>
    );

};

export default memo(Login);
