import { width } from '@mui/system';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
    const [dataDetail, setDataDetail] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setDataDetail(res.data)
        })
    },[])
    const {title, image, description, price, category} = dataDetail;
  return (
    <div className='container'>
      <div className="box-detail">
      <h1>{title}</h1>
      <figure >
        <img src={image} alt={description} width="250px"/>
      </figure>
      <p>{description}</p>
      <h3>{category}</h3>
      <h2>{price} $</h2>
      </div>
      <button className='detailBut' onClick={()=>navigate("/")}>BACK</button>
    </div>
  )
}

export default Detail;
