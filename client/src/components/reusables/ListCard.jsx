import React from 'react';
import './CSS/ListCard.css';
// import AppContext from '../../context/AppContext';
import { useHistory } from 'react-router-dom'; 
import productDelete from '../../utils/productDelete';

function ListCard(props) {
    const {name, brand, model, data, id} = props.product;
    // const {productsList, setProductsList} = useContext(AppContext);
    const history = useHistory();

    const handleRemove = async () => {
      await productDelete(id);
    } 

    const handlePush = () => {
      history.push(`/edit-product-${id}`);
    }

  return (
    <div className='card-container'>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Brand:</strong> {brand}</p>
    <p><strong>Model:</strong> {model}</p>
    {data.map(({price, color}, index)=> (
      <div className='price-color-container' key={index}>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Price:</strong> {price}</p>
      </div>
    ))}
    <div className='buttons-container'>
    <button onClick={handleRemove} className='remove-button'>Remove</button>
    <button className='edit-button' onClick={handlePush}>Edit</button>
    </div>
    </div>
  )
}

export default ListCard