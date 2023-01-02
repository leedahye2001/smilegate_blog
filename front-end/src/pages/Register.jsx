import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>회원가입</button>
        <p>dfd</p>
        <span>
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
