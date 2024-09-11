import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
function Navbar(){

    return(
        <>
 
    <div class="navbar">
        <div class="navbar__left">
            <h1 class="navbar__left__title">
                Udemy
            </h1>
        </div>
        <div class="navbar__middle">
            <i class="fa-solid fa-magnifying-glass" style={{color:"#000000"}}></i>
            <input type="text" placeholder="Search for anything here. Tech, Business, Art..."/>
        </div>
        <div class="navbar__right">
            <p>Courses</p>
            <div class="mylearning">
                <p>My Learning</p>
                <div class="mylearning__popup">
                    <p>Not yet purchased course till now..</p>
                </div>
            </div>
            <i class="fa-solid fa-cart-shopping" style={{color:"#000000"}}><HiMiniShoppingCart /></i>
            <i class="fa-solid fa-bell" style={{color:"#000000"}}><FaBell /></i>
            <i class="fa-solid fa-user" style={{color:"#000000"}}><FaUserLarge /></i>
        </div>
        <div class="navbar__menu">
            <i class="fa-solid fa-bars"><HiMenu /></i>
        </div>
    </div>
    
    </>
    )
 
}

export default Navbar