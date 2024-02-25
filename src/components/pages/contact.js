"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const { register, formState: { errors }, handleSubmit ,reset } = useForm();
  
  const sendEmail = async (e) => {
    
      console.log(e);
      emailjs
      .sendForm('service_z9i9y89', 'template_yw6ejpj', e , {
        publicKey: 'VjdqwJv2RVXPZNrYM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    

  }
  return (
    <div id='contact' className="hero bg-base-200 mt-2 md:mt-8 lg:mt-20 ">
    <div className="card contactForm lg:w-2/5 md:w-3/5  sm:w-[350px] shadow-2xl sm:mr-[15px] lg:mb-10 lg:mt-20 sm:mt-20">
   <h1 className='text-4xl text-primary text-center mt-6'> Contact Me </h1>
      <div className="card-body sm:ml-2">
        <form onSubmit={handleSubmit(sendEmail)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black ">Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" {...register("user_name")} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input name='email' type="email" {...register("user_email")} placeholder="user_email" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-3">
        <label className="label">
            <span className="label-text text-black ">Message</span>
          </label>
  <textarea {...register("message")} name='message' className="textarea textarea-bordered h-24" placeholder="Message" required></textarea>
</div>
        <div className="form-control mt-6 mb-3 items-center">
        <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Submit" />
        </div>
      </form>
      </div>
    </div>
</div>
  );
};


export default Contact;