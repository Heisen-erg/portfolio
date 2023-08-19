import "../styles/contact.css"
import React, { useState } from 'react'
import bg2 from "../assets/bg2.jpg"
import gmail from "../assets/gmail.png"
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
 
  const [data, setdata] = useState({name:"",email:""});
  


  const handleSubmit = async (e) => {
    e.preventDefault();
   const {name,email} = data ;
   try{
   const {data} = await axios.post("https://my-server-dusky.vercel.app/r" , {name,email})
     
    if(data.error){
      toast(data.error,{position: "top-right", autoClose:2000})
    }
    else{toast(data.message,{position: "top-right", autoClose:2000})}
   } catch(error){console.log(error)}
  
  }
  
  return (
 <>
    {document.title='Portfolio-Contact'}
  <div className="container-fluid" >
    <div className="row   gy-3">
      <div className="col-12 m-0 p-0"><img src={bg2} className="m-0 p-0" alt="" id="iii" /></div>
      <div className="col-12 text-center custom z-1 align-content-around "><img src={gmail} alt="" className="size mt-4 " /> <p id="about">gmail:- heisenberg.database.1@gmail.com</p> </div>
      <div className="col-12 text-center custom z-1"><p id="about"> Form </p></div>
      <div className="col-12 text-center custom bg-dark">
        <form  onSubmit={handleSubmit} >
          <div><input type="text" placeholder="NAME" name="name" onChange={(e) => setdata({...data,name: e.target.value})} value={data.name} className="mt-3 input" /></div>
          <div> <input type="text" placeholder="EMAIL" name="email" onChange={(e) => setdata({...data,email: e.target.value})} value={data.email} className="mt-3 input" /></div>
          <button type="submit" className="submit">SUBMIT</button>
          
        </form>
      </div>
    </div>
  </div>
  </>
  )
}

export default Contact