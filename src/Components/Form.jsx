import React, { useState } from 'react'
import axios from 'axios';
const Form = () => {
    const url ="http://localhost:8000/users/";
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const handleChange =(e)=>{
        setName(e.target.value);
      }

      const handleAgeChange =(e)=>{
        setAge(e.target.value);
      }

      const handleEmailChange =(e)=>{
        setEmail(e.target.value);
      }
      const handleSubmit = (e) =>{
        e.preventDefault();
        if(name == "" || age == "" || email == ""){
            alert("Form filed is required");
        }
        else{
            axios.post(url, {
                name:name,
                age:age,
                email:email
            
            
            });
            alert("done");
        }
        
      }
  return (
    <div style={{ "text-align": "center"}}>
        <form onSubmit={handleSubmit}>
        <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /><br/>
             
    
        <label >
          Age:
        </label><br/>
        <input type="text" value={age} required onChange={(e) => {handleAgeChange(e)}} /><br/>
              
       
        <label>
          Email:
        </label><br/>
        <input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
        <input type="submit" value="Submit"/>    
        </form>
    </div>
  )
}

export default Form