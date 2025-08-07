import React, { useRef } from 'react'
import './Login.css'
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {

     let {register, handleSubmit, formState:{errors}, reset}= useForm();
  
     let{user,setuser}=useContext(UserContext)

     function display(data){
  
      console.log(data);
  
      setuser(data)
  
      reset()
      }
  return (
    <div>

        <h1>Login Page</h1>
        <form action="" className='form-control' onSubmit={handleSubmit(display)} >
        <input type="text" className='form-control'     placeholder='Enter name'  {...register("name" , {required:true})}  /> <br />
        {errors.name && <span>It is requred field*</span>} <br />
        <input type="email" className='form-control'  placeholder='Enter email'  {...register('email', {minLength:5, maxLength:10})} />
        {errors.email?.type=='minLength' && <span>Minimum 5 characters requred</span>}
        {
            errors.email?.type=='maxLength' && <span>Maximum 10 characters are allowed</span>
        }
 
         <br />
        <input type="password"  className='form-control'  placeholder='Enter password'  {...register('password')}/> <br />
        <input type="text" className='form-control'   placeholder='Enter mobile' {...register('mobile')}/>  <br /><br/>
        <button>Submit</button>
     </form>
    </div>
  )
}

export default Login
