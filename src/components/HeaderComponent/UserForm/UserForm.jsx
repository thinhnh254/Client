import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getCurrent } from "../../../store/user/asyncActions";
import { clearMessage, logout } from "../../../store/user/userSlice";
import path from "../../../ultils/path";
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
        <h3 className="profile-name">
          {`${current?.firstname} ${current?.lastname}`}
          <div>
            <img src={current?.avatar} />
          </div>
          <div>
            <Link
              className="btn"
              to={
                +current?.role === 0
                  ? `/${path.ADMIN}/${path.DASHBOARD}`
                  : `/${path.MEMBER}/${path.PERSONAL}`
              }
            >
              {+current?.role === 0 ? (
                <span>manage</span>
              ) : (
                <span>profile</span>
              )}
            </Link>
          </div>
          <div>
            <button className="btn" onClick={() => dispatch(logout())}>
              Log out
            </button>
          </div>
        </h3>
      ) : (
        <div>
          <div>
            <Link to="/login">
              <button className="btn btn-login">login now</button>
            </Link>
          </div>
          <div>
            <Link to="/register">
              <button className="btn btn-register">Register</button>
            </Link>
          </div>
        </div>
      )}
    </form>
  );
};

UserForm.propTypes = {
  active: PropTypes.bool,
}.isRequired;

export default UserForm;
