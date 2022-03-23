import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getOfferproduct } from '../../actions/OfferProductActions';
import { clearErrors } from '../../actions/userActions';
import OfferItemsCard from '../Home/OfferItemsCard';
import Header from '../layout/Header/Header';
import Loading from '../layout/loader/Loading'
import MetaData from '../layout/MetaData';
import { useAlert } from "react-alert";
import Footer from '../layout/Footer/Footer';

const Offers = () => {

  const dispatch = useDispatch();

  const alert = useAlert();

  const {
    loading,
    offer,
    error
  } = useSelector((state) => state.offer);
  
  useEffect(() => {
    if(error){
        alert.error(error);
        dispatch(clearErrors())
    }
  dispatch(getOfferproduct());
}, [dispatch,alert,error]); 


    return (
        <>
        {loading ? (
            <Loading />
        ) : (
            <>
             <Header />
             <MetaData title="Offers" />
            {offer.length === 0 ?
            <>
            <h2
            style={{
              textAlign: "center",
              borderBottom: "1px solid rgba(21,21,21,0.5)",
              width: "20vmax",
              fontSize: "1.4vmax",
              fontFamily: "Poppins,sans-serif",
              margin: "3vmax auto",
              color: "rgb(0, 0, 0, 0.7)",
            }}
          >
            Offers
          </h2>
             <span
             style={{width:"100%",
             textAlign:"center",         
              display:"block",
              fontSize:"1.5vmax",
              color:"#0000008f",
              marginBottom:"20px"
          }}
             >No offer Items not have right now</span> 
             </>
              :
            <div>
            <h2
             style={{
               textAlign: "center",
               borderBottom: "1px solid rgba(21,21,21,0.5)",
               width: "20vmax",
               fontSize: "1.4vmax",
               fontFamily: "Poppins,sans-serif",
               margin: "3vmax auto",
               color: "rgb(0, 0, 0, 0.7)",
             }}
           >
             Offers
           </h2>
            <div
             className="offers"
             style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "center",
               flex:".9"
             }}
           >
             {offer &&
               offer.map((offer) => (
                 <OfferItemsCard key={offer.id} offer={offer} />
               ))}
           </div>
            </div>
            }
            </>
        )}
        <Footer />
        </>
    )
}

export default Offers
