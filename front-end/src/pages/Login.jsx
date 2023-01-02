import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>로그인</button>
        <p>dfd</p>
        <span>
          계정이 없으신가요? <Link to="/register">가입하기</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
