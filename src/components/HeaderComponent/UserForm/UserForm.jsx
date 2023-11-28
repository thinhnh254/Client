import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getCurrent } from "../../../store/user/asyncActions";
import { clearMessage, logout } from "../../../store/user/userSlice";
import "./UserForm.scss";

const UserForm = ({ active }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, current, mes } = useSelector((state) => state.user);

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      if (isLoggedIn) {
        dispatch(getCurrent());
      }
    }, 300);
    return () => {
      clearTimeout(setTimeoutId);
    };
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (mes) {
      Swal.fire("Oops!", mes, "info").then(() => {
        dispatch(clearMessage());
        navigate("/login");
      });
    }
  }, [mes]);
  return (
    <form className={`user-form ${active ? "active" : ""}`}>
      {isLoggedIn && current ? (
        <div>
          {`welcome,${current?.firstname} ${current?.lastname}`}
          <button className="btn" onClick={() => dispatch(logout())}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <h3>login now</h3>
          <div className="box">
            <input type="email" placeholder="your email" />
          </div>
          <div className="box">
            <input type="password" placeholder="your password" />
          </div>
          <p>
            forgot your password <a href="/">click here</a>
          </p>
          <p>
            don&apos;t have an account <a href="/">create now</a>
          </p>
          <button type="submit" className="btn">
            login now
          </button>
        </div>
      )}
    </form>
  );
};

UserForm.propTypes = {
  active: PropTypes.bool,
}.isRequired;

export default UserForm;
