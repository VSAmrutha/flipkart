import React, { useState } from "react";
import styles from "./Login.module.css";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import loginImage from "../../images/loginflipkart.PNG";
import { connect } from "react-redux";
import { FaWindowClose } from "react-icons/fa";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginDetails, closeHandler } = props;
  const onChangeHandler = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      const login = { email, password };
      loginDetails(login);
      setPassword("");
      setEmail("");
      closeHandler();
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginLeft}>
        <Typography component="h1" className="h1Blue">
          Login
        </Typography>
        <Typography component="p" className="pBlue">
          Get access to your Orders, Wishlist and Recommendations
        </Typography>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={loginImage} alt="login" />
        </div>
      </div>
      <div className={styles.loginRight}>
        <Button className="closeIcon" onClick={closeHandler}>
          <FaWindowClose />
        </Button>
        <form className={styles.loginform} onSubmit={onSubmitHandler}>
          <input
            className={styles.logininput}
            type="text"
            name="email"
            value={email}
            onChange={onChangeHandler}
            placeholder="Email"
          />
          <input
            className={styles.logininput}
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={password}
            placeholder="Password"
          />
          <Button className="login" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    showLogin: state.showLogin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginDetails: (data) => dispatch({ type: "LOGIN_DETAILS", data }),
    closeHandler: () => dispatch({ type: "SHOW_LOGIN" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
