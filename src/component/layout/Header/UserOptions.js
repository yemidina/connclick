import React, { useState } from "react";
import "./UserOption.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Support from "@material-ui/icons/ReportProblem"
import HeartIcon from "@material-ui/icons/FavoriteBorder";
import HeartActiveIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const UserOptions = ({ user }) => {


  const { cartItems } = useSelector((state) => state.cart);

  const { offerCartItems } = useSelector((state) => state.OfferCart);

  const { favouriteItems } = useSelector((state) => state.favourite);

  const { offerFavouriteItems } = useSelector((state) => state.OfferFavourite);

  const [open, setOpen] = useState(false);
  const history = useHistory();

  const alert = useAlert();

  const dispatch = useDispatch();

  const options = [
    { icon: <HomeIcon />, name: "Home", func: home },
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    {
      icon: (
        <ShoppingCartIcon
          style={{
            color:
              cartItems.length + offerCartItems.length === 0 ? "" : "tomato",
          }}
        />
      ),
      name: `Cart (${cartItems.length + offerCartItems.length})`,
      func: cart,
    },
    {
      icon:
        favouriteItems.length + offerFavouriteItems.length === 0 ? (
          <HeartIcon />
        ) : (
          <HeartActiveIcon style={{ color: "tomato" }} />
        ),
      name:
       `Favourite (${
              favouriteItems.length + offerFavouriteItems.length
            })`,
      func: favourite,
    },
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <Support />, name: "Report us", func: report },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "Admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  if (user.role === "Creator") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    history.push("/dashboard");
  }
  function home() {
    history.push("/");
  }
  function orders() {
    history.push("/orders");
  }
  function cart() {
    history.push("/cart");
  }
  function favourite() {
    history.push("/favourites");
  }
  function account() {
    history.push("/account");
  }

  function report() {
    history.push("/support");
  }

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
    <>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/profile.png"}
            alt="Profile"
            style={{
              position:"fixed"
            }}
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={false}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default UserOptions;
