import React, { Component } from "react";


// import ReactPaginate from "react-paginate";

import { Link } from "react-router-dom";





 const ListingDisplay =(props)=>
 {
   

    const renderData =({listData})=>
    {
   
       
        if(listData)
        {
if(listData.length>0)
{
return listData.map((item) =>
{
 return(

    <div className="item" key={item._id}>
           
    <div className="row">
      <div className="col-md-5">
        <img className="Image"
          src={item.restaurant_thumb}
          alt={item.restaurant_name}
        />
     </div>
    
      <div className="col-md-7">
        <div className="hotel-name">  
        <Link to = {`/detailsrestaurantid?restId=${item.restaurant_id}`}>
          {" "}
        {item.restaurant_name}
        </Link>
                     
                   </div>
        <div className="city-name">{item.address}</div>
        <div className="city-name">{item.rating_text}</div>
        <div className="city-name">Rs.{item.cost}</div>
        <div className="labelDiv">
            <span className="label label-primary">{item.mealTypes[0].mealtype_name}</span>
            <span className="label label-danger">{item.mealTypes[1].mealtype_name}</span>
         </div>
            <div className="labelDiv">
            <span className="label label-success">{item.cuisines[0].cuisine_name}</span>
            <span className="label label-warning">{item.cuisines[1].cuisine_name}</span>
            
            </div>
 
        </div>

        </div>
   

        </div>
        
     
 )
});
}
else {
  return (
    <div>
      <h1>No data </h1>
    </div>
  );
}
}
else {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
}

};
        


  

    return (
        <div className="content">
{renderData(props)}




      </div>
    );
 


  }


export default ListingDisplay;
