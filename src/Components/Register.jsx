import React, { useContext } from 'react'
import './Register.css'
import { useForm } from 'react-hook-form';

function Register() {

   let {register, handleSubmit, formState:{errors}, reset}= useForm();

   

   function display(data){

    console.log(data);

   

    reset()
   }
  return (
    <div>
      <h1>Register Page</h1>
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
              <input type="text" className='form-control'    placeholder='Enter address'   {...register('address')}/> <br />
                    <input type="text" className='form-control'   placeholder='Enter mobile' {...register('mobile')}/>  <br />
        <button>Submit</button>
     </form>

    </div>
  )
}

export default Register 