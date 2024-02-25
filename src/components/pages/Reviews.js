"use client"
import { useEffect, useState } from "react";
import Review from './review';

const Reviews = () => {

    const [reviews ,setReviews] = useState([])

    useEffect( ()=>{
        fetch("review.json")
        .then(res =>res.json())
        .then(data => setReviews(data))
    },[])


    if(!reviews){
        return <p>Loading....</p>
    }
    
    return (


        <div>
            <h1 className="text-3xl text-primary text-center mb-10 font-bold">Customer Feedback</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-2 w-full md:w-full lg:w-3/5 mx-auto">

            {
          reviews.map((review)=><Review key={review.id} review ={review}></Review> 
          )}
         
         </div>
        </div>
    );
};

export default Reviews;