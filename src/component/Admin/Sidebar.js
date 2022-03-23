import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import LocalOffer from "@material-ui/icons/LocalOffer";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  
  const button = () =>{
    let items = document.querySelectorAll(".Dashboard__item");
   
}

  return (
    <div className="sidebar">
      <Link to="/">
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/19-e-commerce-currency-shopping/shopping-bag.svg" alt="Ecommerce" 
        />
      </Link>
      <Link to="/dashboard">
        <p className="Dashboard__item" onClick={button}>
          <DashboardIcon /> Con-Click Dashboard
        </p>
      </Link>
          <Link to="/admin/products">
              <p className="Dashboard__item"><PostAddIcon /> All Products</p>
          </Link>

          <Link to="/admin/product">
             <p><AddIcon />Create Product</p>
          </Link>

          <Link to="/admin/offersproduct">
             <p><LocalOffer />All Offers</p>
          </Link>


          <Link to="/admin/offers/new">
             <p><LocalOffer />Create Offer</p>
          </Link>
         
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;