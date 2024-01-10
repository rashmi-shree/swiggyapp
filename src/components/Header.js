import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
const Header = () => {
    // subscribing to the store using a selector
    const cartItems = useSelector((store)=> store.cart.items)
    return(
        <div className="flex justify-between border-solid border-2 border-red-500">
            <div className="m-4">
                <img className="w-20 h-10" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="m-4">
                <ul className="flex cursor-pointer">
                    <li 
                        className="pr-5 hover:text-red-500"
                    >
                        <Link to="/">Home</Link>
                    </li>
                    <li 
                        className="pr-5 hover:text-red-500"
                    >
                        <Link to="/about">About Us</Link>
                    </li>
                    <li 
                        className="pr-5 hover:text-red-500"
                    >
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li 
                        className="pr-5 hover:text-red-500"
                    >
                        <Link to="/cart">Cart- {cartItems.length}</Link>
                    </li>
                    <li
                        className="pr-5 hover:text-red-500"
                    >
                        <Link to="/groceries" >Groceries</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;