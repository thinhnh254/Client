import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../../../store/user/asyncActions";
import "./UserForm.scss";
import { logout } from "../../../store/user/userSlice";

const UserForm = ({ active }) => {
  const dispatch = useDispatch();
  const { isLoggedIn, current } = useSelector((state) => state.user);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCurrent());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <form className={`user-form ${active ? "active" : ""}`}>
      {isLoggedIn ? (
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
