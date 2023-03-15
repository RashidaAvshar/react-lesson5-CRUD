import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


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
    const [mainData, setMainData] = useState([])
    const navigate = useNavigate();
    const [renderPage, setRenderPage] = useState(false)
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        // .then(res=>{setMainData(res.data)})
        // .then(res=>{setData(mainData)})
        .then((res)=>{ setData(res.data)})
    },[renderPage]);
const deleteItem = (id) =>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.delete(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        // setRenderPage(!res.renderPage)
        console.log(res)
    });
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    
}


// arrow functionda netice qayitmalidisa burug moterzieynen yazanda return sozu mutleq yazilmalidi, adi moterizeynen yazilmamalidi
// sen burug moterize qoymusdun, amma return yazmamisdin
// eger netice qayitmiyacagsa, basqa bir is gorecekse, meselen consola nese yazdirma, setData(nese eliyeceksense
//  o halda her iki hal istifade olunanda return olmur men bileni)
// hmm reqemi sildin, yazaram.. bir de baxim bunlara, tesekkur yene de xecalet oldum))
// ne reqem, hec gormedim ki( xecalet zad olma, o ne sozdu, oyrenme yolunda ireliliyirik hamimiz nese olsa yazacam sabah))
// reqem burda silindi?
// buna geri silim ucun de usul tapdim , cox da keyfiyyetli deyil, istesen elave ederik commentle yazarsan baxaram yoxlayaram
// 82de data mainData evezlemesi, 31-32 comentden cixarilir, 33 comentlenir
// qaytardim, arasdirib evezliyersen istesn yeni arasdir deyisikliklerin neden ibaret oldugunu, casdirmasin seni


const onHandleSearch = (e) =>{
    if(e.target.value.length >0){
        const newData = data.filter(item=>(
            item.title.toLowerCase().includes(e.target.value.toLowerCase())||item.category.toLowerCase().includes(e.target.value.toLowerCase())||item.price.toString().includes(e.target.value)
        ))
        setData(newData)
    
    } else {
        setRenderPage(!renderPage)
    }
   
}

  return (
    <div className='container'>
        <div className='search'>
            <input type="text" onChange={onHandleSearch} />
        </div>
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

export default Home;
