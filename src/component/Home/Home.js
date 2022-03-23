import React, { useEffect } from "react";
import "./Home.css";
import Product from "./ProductCard";
import Offers from "./OfferItemsCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getproduct } from "../../actions/ProductActions";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../layout/loader/Loading";
import {useAlert} from "react-alert";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Carousel from "react-material-ui-carousel";
import BottomTab from "../layout/Header/BottomTab";
import { getOfferproduct } from "../../actions/OfferProductActions";
import bg from "../../Assets/background.jpg";
import bg2 from "../../Assets/background2.jpg";


const Home = () => {

  const alert = useAlert()
  const dispatch = useDispatch();

  const { products } = useSelector(
    (state) => state.products
  );
  const { offer,loading, error} = useSelector(
    (state) => state.offer
  );
  useEffect(() => {
      if(error){ 
           alert.error(error);
           dispatch(clearErrors());
      }
    dispatch(getproduct());
  }, [dispatch,error,alert]);

  useEffect(() => {
    if(error){ 
         alert.error(error);
         dispatch(clearErrors());
    }
  dispatch(getOfferproduct());
}, [dispatch,error,alert]);

  return (
   <>
    {loading ? <Loading /> : 
     <>
     <Header />
     <MetaData title="Home" />

       {/* Carousel */}
       <div className="banner">
              <Carousel>
                <img src={bg} className="bgImg"/>
                <img src={bg2} className="bgImg"/>
              </Carousel>
            <div className="home__content">
              <div style={{
                display:"flex",
                alignItems:"center",
              }}>
              <h2 style={{
                fontFamily: "Segoe Script",
                fontSize: "3em",
                fontWeight:"500"
              }}>Buy 2 Get</h2>
              <span style={{
                padding:"10px",
                backgroundColor:"#fff",
                margin:"0px 10px",
                textAlign:"center",
                width:"150px",
                height:"40px",
                color: "#26c",
                fontFamily: "Segoe Script",
                fontSize: "2.4em",
                display:"flex",
                justifyContent:"center",
                lineHeight:".7",
                alignItems:"center"
              }}>1 Free</span>
              </div>
              <div>
                <h2 style={{
                  fontSize:"4.5em",
                  fontFamily:"Poppins,sans-serif",
                  color:"#fff",
                }}>Fashionable</h2>
              </div>
              <div>
                <h2 style={{
                  fontSize:"4.5em",
                  fontWeight:"400",
                  fontFamily:"Poppins,sans-serif",
                  color:"#fff",
                  lineHeight:".7"
                }}>Collection</h2>
              </div>
              <div>
                <h2
                style={{
                  fontWeight:"400",
                  fontFamily:"Poppins,sans-serif",
                  color:"#fff",
                  fontSize:"1em",
                  paddingTop:"10px"
                }}
                >
                Get Free Shipping on all orders over $99.00
                </h2>
              </div>
              <div>
                <a href="#container">
                <button type="submit" style={{
                  width:"120px",
                  height:"50px",
                  border:"none",
                  background:"#3BB77E",
                  margin:"10px 0",
                  fontSize:"1.2vmax",
                  color:"#fff",
                  cursor:"pointer"
                }}>SHOP NOW</button>
                </a>
              </div>
            </div>
        </div>


     <h2 className="homeHeading">Featured Products</h2>
     <div className="container" id="container">
       
       {products && products.map((product) =>(
           <Product product={product} />
       ))}
     </div>

     <h2 className="homeHeading">Offer Products</h2>
      {offer.length <= 0 ? (
       <span style={{width:"100%",
       textAlign:"center",         
        display:"block",
        fontSize:"1.5vmax",
        color:"#0000008f",
        marginTop:"-50px",
        marginBottom:"20px"
      }} className="cursive">No Offer is not running right now ...</span>
      ):(
        <div className="offerItems" style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          color:"#000000a6",
          padding:"10px 0px",
        }}>
          {offer && offer.map((offer) =>(
          <Offers offer={offer} />
          ))}
        </div>
   
      )}
     <Footer />
     <BottomTab />
   </>
    }
   </>
  );
};

export default Home;
