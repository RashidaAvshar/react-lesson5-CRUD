import axios from 'axios';
import React, { useEffect, useState } from 'react';
import profilePic from "../styles/image/user-account-.jpg";

const Upload = () => {
  const [profile, setProfile] = useState(null)
  const [images, setImages] = useState("")
  const [renderPage, setRenderPage] = useState(false)
  useEffect(()=>{
    axios("http://localhost:9000/get-data").then((res)=>{      
      if(typeof res.data.data[0] != "undefined"){
        setImages(res.data.data[0].profile)
      }
    })
  },[renderPage])
  const convertBase64 = (file) => {
    console.log(file)
    return new Promise ((resolve, reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
  const uploadImage = async (e) =>{
    const file = e.target.files[0];
    const base64 = await convertBase64(file)
    setProfile(base64)
  }
  const createProfileImg = () =>{
    axios.post(`http://localhost:9000/create-data`, 
    {profile}, 
    {headers: {"Content-Type": "application/json",},})
    .then((res)=>{
      setRenderPage(!renderPage)
    })
  }
  
  return (
    <div className='container'>
      <div className='profilePic'>
        <img src={images === "" ? profilePic : images} />
      </div>
      <input type="file" onChange={uploadImage}/>
      <button onClick={createProfileImg}>Send image</button>
    </div>
  )
}

export default Upload
