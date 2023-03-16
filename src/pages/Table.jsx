import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Table = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(()=>{
        axios("https://fakestoreapi.com/products/").then((res)=>{
            setData(res.data)
        })
    }, [])
    const openDatails = (e, id) =>{
        navigate(`/details/${id}`)
    }

    const deleteItem = (id) =>{
        // axios.delete("https://fakestoreapi.com/products/")
        console.log(`${id}`)
    }
  return (
    <div className='container'>
        <div className="table-box">
        <table id="customers">
<thead>
<tr>
    <th>ID</th>
    <th>Product title</th>
    <th>Product description</th>
    <th>Product category</th>
    <th>delete/detail</th>
  </tr>
</thead>
 <tbody>
 {
    data.map((item)=>(
        <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title.slice(0,20)}</td>
        <td>{item.description.slice(0, 20)}</td>
        <td>{item.category.slice(0, 20)}</td>
        <td>
            <span onClick={(e)=>deleteItem(item.id)} className='delete'>DELETE</span> / 
            <span onClick={(e)=>openDatails(e, item.id)} className='details'>DETAILS</span></td>
      </tr>
    ))
  }
 </tbody>
 

</table>
        </div>
      
    </div>
  )
}

export default Table
