import React, { Component } from 'react';
const Posts=({posts,loading})=>
{
if(loading)
{ return<h2>Loading...</h2>
}

return <ul className="list-group mb-4">
{
    posts.map(post =>
    (

        <li key={post._id} className="list-group-item">
            {post.mealTypes.mealtype_id}

        </li>
    ))}
    </ul>
}





export default Posts;