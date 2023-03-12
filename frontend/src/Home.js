import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return(<>
    <div><h3>To Create Offer</h3>
   <Link to={'/signup'}><button>SignUp</button></Link> 
   <p>Already have an account <Link><button>SignIn</button></Link></p>
    </div>
    </>)
}
export default Home