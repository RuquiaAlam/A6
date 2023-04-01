import { BrowserRouter  , Route} from "react-router-dom";
import Home from "./component/Home/Home";
import ListingApi from "./component/Listing/ListingApi";
import Details from "./component/details/Details.js";
import Header from "./Header";
import Footer from "./Footer";

const Routing = ()=>
{
    return(
    
    <BrowserRouter>
    <>
 <Header/>

<Route exact path ="/" component = { Home }/>
<Route path ="/listing/:mealId" component = {ListingApi}/>
<Route path="/detailsrestaurantid" component={Details} />


<Footer/>
    </>
    </BrowserRouter>

   );

}

export default Routing;