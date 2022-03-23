import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
    // eslint-disable-next-line
import DiscountIcon from "@material-ui/icons/LocalOffer";
import SideBar from "./Sidebar";
import { getOfferProductDetails, updateOfferProduct } from "../../actions/OfferProductActions";
import { clearErrors } from "../../actions/userActions";
import { UPDATE_OFFERPRODUCT_RESET } from "../../constants/OfferProductConstans";

const UpdateOfferProduct = ({ history, match }) => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error,Offer } = useSelector((state) => state.offerProductDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.offerUpdate);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
      // eslint-disable-next-line
  const [offerPrice, setOfferPrice] = useState("");
  const [timeStamps, setTimeStamps] = useState("");
  const [description, setDescription] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
 
  const offerProductId = match.params.id; 


  useEffect(() => {
    if (Offer && Offer._id !== offerProductId) {
      dispatch(getOfferProductDetails(offerProductId));
    } else {
      setName(Offer.name);
      setDescription(Offer.description);
      setPrice(Offer.price);
      setTimeStamps(Offer.timeStamps);
      setOfferPrice(Offer.offerPrice);
      setStock(Offer.Stock);
      setOldImages(Offer.images);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Product Updated Successfully");
      history.push("/admin/offersproduct");
      dispatch({ type: UPDATE_OFFERPRODUCT_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    history,
    isUpdated,
    offerProductId,
    Offer,
    updateError,
  ]);

  const updateProductSubmitHandler  = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("offerPrice", offerPrice);
    myForm.set("timeStamps", timeStamps);
    myForm.set("description", description);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateOfferProduct(offerProductId, myForm));
  };

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

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
        <Fragment>
        <MetaData title="Edit Offer Product" />
        <div className="dashboard">
          <SideBar />
          <div className="newProductContainer">
            <form
              className="createProductForm"
              encType="multipart/form-data"
              onSubmit={updateProductSubmitHandler}
            >
              <h1>Offer Product</h1>
  
              <div>
                <SpellcheckIcon />
                <input
                  type="text"
                  placeholder="Offer Product Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                <AccountTreeIcon />
                <input
                  type="String"
                  placeholder="Offer Date"
                  onChange={(e) => setTimeStamps(e.target.value)}
                />
              </div>

              <div>
                <AttachMoneyIcon />
                <input
                  type="number"
                  placeholder="Product Price"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
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
                <StorageIcon />
                <input
                  type="number"
                  placeholder="Stock"
                  required
                  onChange={(e) => setStock(e.target.value)}
                  value={Stock}
                />
              </div>
  
              <div id="createProductFormFile">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={updateProductImagesChange}
                  multiple
                />
              </div>
  
              <div id="createProductFormImage">
                {oldImages &&
                  oldImages.map((image, index) => (
                    <img key={index} src={image.url} alt="Old Product Preview" />
                  ))}
              </div>
  
              <div id="createProductFormImage">
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Product Preview" />
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
      </Fragment>
    )
}

export default UpdateOfferProduct
