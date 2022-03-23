import './App.css';
import { useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from './component/Product/Search';
import LoginSignup from "./component/Authentication/LoginSignup";
import Store from "./Store";
import WebFont from "webfontloader";
import { loadUser } from './actions/userActions';
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from 'react-redux';
import Profile from "./component/user/Profile.js";
import ProtectedRoute from './component/route/ProtectedRoute';
import UpdateProfile from "./component/user/UpdateProfile";
import UpdatePassword from "./component/user/UpdatePassword";
import ForgotPassword from "./component/user/ForgotPassword";
import ResetPassword from "./component/user/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import confirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import orderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from './component/Admin/NewProduct';
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList"; 
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews.js";
import Favourite from "./component/favourites/Favourite";
import Offers from "./component/Offers/Offers";
import NewOfferProduct from "./component/Admin/NewOfferProduct";
import OfferDetails from "./component/Offers/OfferDetails";
import OfferProductList from './component/Admin/OfferProductList';
import UpdateOfferProduct from './component/Admin/UpdateOfferProduct';
import ConfirmAccount from "./component/Authentication/ConfirmAccount";
import About from "./component/About/About";
import CommingSoon from "./component/layout/CommingSoon";
import Contact from "./component/layout/Contact";
import Support from "./component/layout/Support";
import Rules from "./component/layout/Rules";
import Nogod from './component/Cart/Nogod';
import MoreOption from "./component/more/MoreOption";

function App() {

  const {isAuthenticated,user} = useSelector((state) =>state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    Store.dispatch(loadUser());
    
  }, []);
  return (
    <Router>
      {isAuthenticated && <UserOptions user={user} />}
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/creator" component={CommingSoon} />
    <Route exact path="/commingsoon" component={CommingSoon} />
    <Route exact path="/more" component={MoreOption} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/support" component={Support} />
    <Route exact path="/faq" component={Rules} />
    <Route exact path="/product/:id" component={ProductDetails} />
    <Route exact path="/offersproduct/:id" component={OfferDetails} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/offers" component={Offers} />
    <Route exact path="/products/:keyword" component={Products} />
    <Route path="/search" component={Search} />
    <Route exact path="/login" component={LoginSignup} />
    <Route exact path="/user/activate/:token" component={ConfirmAccount} />
    <ProtectedRoute exact path="/account" component={Profile} />
    <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
    <ProtectedRoute exact path="/password/update" component={UpdatePassword} />
    <Route exact path="/password/forgot" component={ForgotPassword} />
    <Route exact path="/password/reset/:token" component={ResetPassword} />
    <Route exact path="/favourites" component={Favourite} />
    <ProtectedRoute exact path="/shipping" component={Shipping} />
    <ProtectedRoute exact path="/order/confirm" component={confirmOrder} />
    <ProtectedRoute exact path="/success" component={OrderSuccess} />
    <ProtectedRoute exact path="/orders" component={MyOrders} />
    <ProtectedRoute exact path="/order/:id" component={orderDetails} />
    <ProtectedRoute  isAdmin={true} exact path="/dashboard" component={Dashboard} />
    <ProtectedRoute  isAdmin={true} exact path="/admin/products" component={ProductList} />
    <ProtectedRoute  isAdmin={true} exact path="/admin/product" component={NewProduct} />
    <ProtectedRoute  isAdmin={true} exact path="/admin/offersproduct" component={OfferProductList} />
    <ProtectedRoute  isAdmin={true} exact path="/admin/offers/new" component={NewOfferProduct} />
    <ProtectedRoute  isAdmin={true} exact path="/edit/product/:id" component={UpdateProduct} />
    <ProtectedRoute  isAdmin={true} exact path="/edit/offersproduct/:id" component={UpdateOfferProduct} />
    <ProtectedRoute  isAdmin={true} exact path="/admin/orders" component={OrderList} />
    <ProtectedRoute  isAdmin={true} exact path="/admin/order/:id" component={ProcessOrder} />
    <ProtectedRoute  isAdmin={true} exact path="/admin/users" component={UsersList} />
    <ProtectedRoute  isAdmin={true} exact path="/admin/user/:id" component={UpdateUser} />
    <ProtectedRoute  isAdmin={true} exact path="/admin/reviews" component={ProductReviews} />
    <Route exact path="/cart" component={Cart} />
     <ProtectedRoute exact path="/process/payment" component={Payment} />
     <ProtectedRoute exact path="/payment/nagad" component={Nogod} />
    </Switch>
    </Router>

  );
}

export default App;
