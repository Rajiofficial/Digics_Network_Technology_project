import React from 'react'
import  "./Css/section13.css"
import {AiFillFacebook,AiOutlineTwitter} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"





const Section13 = () => {

  return (
    <div>

        <div className="sec_13_container">

             <div className="sec_13_left">
           <p className='sec_13_leftcontent'>  
           Copyright ©2023 bitss.fr | All Rights Reserved
           </p>
             </div>

             <div className="sec_13_center">
                 <img className='sec_13_img' src="https://bitss.fr/wp-content/uploads/2023/07/cropped-bitss_logo-1-300x300.png" alt="" />
                    <p className='sec_13_logo_con'>BITSS.FR BY BFIN SASU</p>
             </div>


             <div className="sec_13_right">
                   <div className='sec_13_click'>
                    <a className='Cookie_Policy_1' href="">Cookie Policy</a>
                    <div className='bf'>
                    <a className='Cookie_Policy_2' href=""> Contact Us</a>
                   </div>
                    </div>
                   

                   <div className='sec_13_socialmedia'>
                    <div>
                    <a href="https://www.facebook.com/people/Bitss/61550739733763/"><AiFillFacebook color='white'/></a>
                    </div>
                  
                  <div>
                  <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FBFIN_LTD"> <AiOutlineTwitter color='white'/></a>
                  </div>
                  
                  <div>
                  <a href=""><BiLogoLinkedin color='white'/></a>
                  </div>
                   
                   </div>
             </div>
        </div>
      
    </div>
  )
}

export default Section13
