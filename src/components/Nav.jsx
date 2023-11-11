import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import "./Css/nav.css"
import { GrCart} from "react-icons/gr";
import Contain from './Nav_bitss/Contain';

const Nav = () => {

    const [showContent, setShowContent] = useState(false);
  
    const [showContent1, setShowContent1] = useState(false);
  
    const toggleContent = () => {
      setShowContent(!showContent);
    };

    const toggleContent1 = () => {
      setShowContent1(!showContent1);
    };


  return (
    <>
    <div className='body'>
  <div >
    
    <select className='language' id="dropdown">
        <option value="option1">country</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
    </select>
  

  </div>
    <div className='container'>

        <div className='nav_logo'>
            <img style={{width:"50px"}} src=" https://bitss.fr/wp-content/uploads/2023/07/bitss_icon_1.png" alt="" />
        </div>

        <div className='nav_center'>
          
         <div> <Link className='Link' to="/">home</Link>         </div>  
         
         <div>  
         <button onClick={toggleContent}>cyber bites security</button>
                  {showContent && <Contain/>}
         
          </div> 

         <div>  <Link className='Link' to="/">free products</Link>    </div> 

         <div>     <button onClick={toggleContent1}>About Us</button>
                  {showContent1 && <div className='nav_box'><ul className='nav_ul'> 
                    <li><Link className='Link' to="/cookie">Cookie policy</Link> </li> 
                    <li><Link className='Link' to="/praivacy">privacy policy</Link> </li> 
                    <li><Link className='Link' to="/general">Genaral Condition</Link> </li> 
                    
                     </ul>   </div>}  </div> 

         <div>   <Link className='Link' to="/contact_us">Contact Us</Link>   </div> 
         
        </div>



        <div className='nav_end'>

<div><GrCart/></div>
<div><button>my rekening</button></div>

        </div>


      
    </div>
    </div>
    </>
  )
}

export default Nav
