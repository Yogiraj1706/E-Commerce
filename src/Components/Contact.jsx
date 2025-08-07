import React, { useState } from 'react'
import { send } from '@emailjs/browser'

function Contact() {

    let[from_name,setname]=useState('')
    let[from_email,setemail]=useState('')
    let[message,setmessage]=useState('')

    function handleSubmit(e){
        e.preventDefault();
        

        var templateParams = {
        to_name: 'Yogiraj',
        from_name: from_name,
        message: message,
        from_email:from_email
    };

    console.log(templateParams);
    

    send('service_4mc6g8a', 'template_jtbvrbc', templateParams,'1Knkm_tXhWcPpOo1E').then(
    (response) => {
        console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
        console.log('FAILED...', error);
    },
    );

    }
  return (
    <div>
      <h1>Contact Page</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Name' onChange={(e)=>{setname(e.target.value)}}></input><br></br>
        <input type='email' placeholder='Enter Email' onChange={(e)=>{setemail(e.target.value)}}></input><br></br><br></br>
        <textarea placeholder='Enter message here' rows={3} cols={25} onChange={(e)=>{setmessage(e.target.value)}}></textarea><br></br><br></br>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact
