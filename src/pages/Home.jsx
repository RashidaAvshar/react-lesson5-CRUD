import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'title', headerName: 'Product title', width: 400 },
    { field: 'description', headerName: 'Product description', width: 420 },
    {
      field: 'price',
      headerName: 'Product price',
      type: 'number',
      width: 80,
    },
    { field: 'category', headerName: 'Product category', width: 200 },

]



const Home = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    const [renderPage, setRenderPage] = useState(true)
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setData(res.data)
        })
    },[renderPage]);
const deleteItem = (id) =>{
    axios.delete(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        setRenderPage(!res.renderPage)
    })
}


  return (
    <div className='container'>
       <div style={{ height: 400, width: '100%', marginTop: 30}}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        autoHeight
        onCellClick={(row)=>deleteItem(row.id)}
        onCellDoubleClick={(row)=>navigate(`detail/${row.id}`)}
      />
    </div>
    </div>
  )
}

export default Home
