
import React, { useState } from 'react'
import  { useNavigate } from 'react-router-dom'
function Signup(props) {
    const [credentials,setcredentials] = useState({name:"",email:"",password:"",cpasswor:""})
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
         const {name,email,password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser",{
           
            method:'POST',
            headers:{
              'Content-type':'application/json',
              
            },
            body:JSON.stringify({name,email,password})
          })
          const json = await response.json()
          console.log(json);
          if (json.success){
        localStorage.setItem('token',json.authtoken);
        navigate("/home")
        props.showAlert("veiled credential","success")
          }else{
            props.showAlert("inveiled credential","denger")
          }
          
            }
            const onChange=(e)=>{
                setcredentials({...credentials,[e.target.name]:e.target.value})
              }
  return (
    <div>
       <form onSubmit={handleSubmit}>
       <div className="mb-3">
    <label htmlFor="name" className="form-label">name</label>
    <input type="text" className="form-control" id="name" name='name' onChange={onChange}aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" id="exampleInputEmail1"onChange={onChange} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"onChange={onChange} minLength={5} required name ="password"id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"> conform Password</label>
    <input type="password" className="form-control"onChange={onChange} minLength={5} required id="cpassword" name='cpassword'/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
