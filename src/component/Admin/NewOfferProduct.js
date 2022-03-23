import React, {useState,useEffect} from 'react'
import MetaData from '../layout/MetaData';
import Sidebar from './Sidebar';
import AccountTreeIcon from "@material-ui/icons/QueryBuilder";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import { Button } from "@material-ui/core";
import DiscountIcon from "@material-ui/icons/LocalOffer";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createOffer } from '../../actions/OfferProductActions';
import { NEW_OFFERPRODUCT_RESET } from '../../constants/OfferProductConstans';

const NewOfferProduct = ({history}) => {

 const dispatch = useDispatch();
  const alert = useAlert();
  
  const {loading, error, success } = useSelector((state) => state.newOffer);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [offerPrice, setOfferPrice] = useState("");
  const [description, setDescription] = useState("");
  const [timeStamps, setTimeStamps] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

   useEffect(() => {
     if (error) {
         alert.error(error);
         dispatch(clearErrors)
     }

     if (success) {
        alert.success("Offer Created Successfully");
        history.push("/dashboard");
        dispatch({ type: NEW_OFFERPRODUCT_RESET });
      }
   }, [dispatch, alert, error, history, success])
   
   const createOfferSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("timeStamps", timeStamps);
    myForm.set("offerPrice", offerPrice);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createOffer(myForm));
  };
 
  const createOfferImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

    return (
        <>
        <MetaData title="Create Offer" />
        <div className="dashboard">
        <Sidebar />
        <div className="newProductContainer">
        <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createOfferSubmitHandler}
          >
            <h1>Create Offer</h1>
           
            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <DiscountIcon />
              <input
                type="number"
                placeholder="Product Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          
            <div>
              <DiscountIcon />
              <input
                type="String"
                placeholder="Discount Percent *optional"
                onChange={(e) => setOfferPrice(e.target.value)}
              />
            </div>
            
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
          
            <div>
              <AccountTreeIcon />
              <input
                type="text"
                placeholder="Offer Duration"
                required
                value={timeStamps}
                onChange={(e) => setTimeStamps(e.target.value)}
              />
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createOfferImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Offer Preview" />
              ))}
            </div>
               
            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
              </form>
            </div>
        </div>
        </>
    )
}

export default NewOfferProduct
