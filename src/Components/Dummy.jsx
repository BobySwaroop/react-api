import React from 'react'
// import  {pic} from  "../img.png"
import axios from "axios";
import "../App.css";

import { useEffect, useState } from "react";
const Dummy = () => {
    const [data, setdata] = useState([]);
    const url = "http://localhost:8000/users/";
    useEffect(()=>{
      axios.get(url).then((res)=>{
        setdata(res.data);
        console.log(res);
      })
    },[])
    return (
        <div className='app'>
         {
            data.map((val) => {
                return (
       <div className='ss'>             
<div class="card">
  <img src={val.pic} alt="Avatar" style={{width:'20%'}}/>
  <div class="container">
    <h4><b>{val.name}</b></h4> 
    <p>{val.age}</p>
    <p>{val.email}</p> 
  </div>
</div>
</div>
                )
              
                
                
            })
         }
        </div>
    )

}

export default Dummy