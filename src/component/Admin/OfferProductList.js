import React, {Fragment,useEffect} from 'react'
import MetaData from '../layout/MetaData'
import { Link } from "react-router-dom";
import Sidebar from './Sidebar'
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { DataGrid } from "@material-ui/data-grid";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { clearErrors, deleteOfferProduct, getAdminOfferProduct } from '../../actions/OfferProductActions';
import { DELETE_OFFERPRODUCT_RESET } from '../../constants/OfferProductConstans';

const OfferProductList = ({history}) => {

const dispatch = useDispatch();

const alert = useAlert();

const { error, offer } = useSelector((state) => state.offer);

const { error: deleteError, isDeleted } = useSelector(
    (state) => state.offerUpdate
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteOfferProduct(id));
  };


useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
        alert.error(deleteError);
        dispatch(clearErrors());
      }
  
      if (isDeleted) {
        alert.success("Product Deleted Successfully");
        history.push("/dashboard");
        dispatch({ type: DELETE_OFFERPRODUCT_RESET });
      }
    dispatch(getAdminOfferProduct());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);


const columns = [
    { field: "id", headerName: "Offers ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/edit/offersproduct/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
            onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];
   
  offer && 
  offer.forEach((item) =>{
      rows.push({
          id: item._id,
          stock:item.Stock,
          price: item.price,
          name: item.name,
      })
  })

    return (
        <>
        <MetaData title={`ALL OFFERS - Admin`} />
        <div className="dashboard">
            <Sidebar />
            <div className="productListContainer">
               <h1 id="productListHeading">ALL OFFERS PRODUCTS</h1>
               <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                className="productListTable"
                autoHeight
               />
            </div>
        </div>
        </>
    )
}

export default OfferProductList
