import axios from "axios";

import  { useState } from "react";
import {useEffect} from "react";
import Posts from "./component/Posts";
import Pagination from './component/Listing/Pagination';


const App = () =>
{
 const [posts,setPosts] = useState([]);
 const [loading,setLoading]= useState(false);
 const [currentPage,setCurrentPage]=useState(1);
 const [postsPerPage] = useState(15)



 useEffect(()=>
 {
   const fetchPosts= async ()=>
   {
     setLoading(true);
const res =await axios.get("http://localhost:9003/RestaurantData?mealId=");
setPosts(res.data);
setLoading(false);

console.log(posts);
   }
   fetchPosts();
 })//only run when it mounts

const  indexOfLastPost= currentPage * postsPerPage;
const indexOfFirstPost =indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  // Change page


  const paginate = pageNumber => setCurrentPage(pageNumber);
 
return(
  <div className="container mt-5">
  <h1 className='text-primary mb-3'> Results</h1>
  <Posts posts = {currentPosts} loading ={loading}/>

  <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
)
}
export default  App;

