import styles from "./Login.module.css";
import LayoutForm from "../layout";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Communication from "./../../img/networking.png";
import FusionLogo from "./../../img/green-power.png";
import Cookies from "js-cookie";
import React from "react";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  let navigate = useNavigate();

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      navigate("/messages");
    }
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    const enterEmail = emailRef.current.value;
    const enterPassword = passwordRef.current.value;

    if (enterEmail.length > 3 && enterPassword.length > 3) {
      Cookies.set("user", Math.random());
      navigate("/messages");
    }
  };
  return (
    <LayoutForm>
      <form className={styles.login} onSubmit={submitHandler}>
        <img src={FusionLogo} className={styles.logoImg} alt="" />
        <h4 className={styles.title}>FUSION</h4>
        <div>
          <input
            type="text"
            id="fname"
            className={styles.inputClass}
            name="fname"
            placeholder="Enter a username"
            ref={emailRef}
          />

          <input
            type="password"
            id="fname"
            className={styles.inputClass}
            name="fname"
            placeholder="Enter a password"
            ref={passwordRef}
          />
          <div className={styles["text-center"]}>
            <button
              type="submit"
              className={styles.btnLogin}
              onClick={submitHandler}
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
      <div className={styles.imageform}>
        <img src={Communication} className={styles.windowImg} alt="" />
      </div>
    </LayoutForm>
  );
};
export default Login;
