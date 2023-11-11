import React from 'react'
import "../Css/cyber.css"
import {GrServerCluster} from "react-icons/gr"
import {AiOutlineFileSearch} from "react-icons/ai"
import {SiSpringsecurity} from "react-icons/si"
import {FaServer} from "react-icons/fa"
import {TbWorldSearch} from "react-icons/tb"
import {TfiEmail} from "react-icons/tfi"
import { Link } from 'react-router-dom'




const Cyber = () => {
  return (
    <div className='cy_con'>


        <div className="cyber_containers_1">
    
             
                <h2 className='cyber_title'>  Bitss Cyber Security Products </h2>
            
            <div className='cyber_second_con'>
{/* -----------------first------------ */}
               <div className='cyber_left'>
                    <div className='cyber_left_1'>
                        <div>  <GrServerCluster size={30}/>
                        
                        </div>
                       <div>
   <Link className='link_1' to="/Network_contain"><span>Bitss N for database network protection includes dedicted servers within network</span></Link>
                 <span className='cyber_span_2'>Bitss N offers an innovative solution designed to fortify your network's defenses, ensuring that your sensitive information remains secure.</span>
                       </div>

                    </div>
                    <div className='cyber_left_1'>
                        <div><a href=""><TbWorldSearch size={30}/></a></div>
                         <div>
                         
                         <Link className='link_1' to="/Bitss_wd_home"> <span>Bitss WP for database website protection</span></Link>
                              <span className='cyber_span_2'>
                              Bitss WP offers an innovative solution  ensuring that your sensitive information remains secure from cyber threats.
                              </span>
                         </div>
                    </div>

                    <div className='cyber_left_1'>
                              <div><a href=""><FaServer color='orange' size={30}/></a></div>
                               <div>
                               <Link className='link_1' to="/Bitss_server_database"> <span>Bitss S for dedicated server database protection</span></Link> 
                                   <span className='cyber_span_2'>
                                    Bitss S offers a comprehensive and proactive approach to database security, ensuring that your sensitive information remains safe and secure.
                                    </span>
                               </div>
                    </div>
                    <div>
                        <a href=""><span className='elementor-button-text' ><i class="fa fa-user-secret" aria-hidden="true"></i>All about cyber bitss security</span></a>
                    </div>
               </div>

{/* -----------------center------------------ */}
                <div className='cyber_center'>
                      <div className='cyber_center_1'>
                                  <div><a href=""><AiOutlineFileSearch size={30}/></a></div>
                                  <div>

                                    <Link className='link_1' to="/bitss_c"><span>Bitss C antispam for contact page on website</span></Link>
                                    <span className='cyber_span_2'>
                                    Bitss C offers a powerful and intelligent antispam system that ensures a hassle-free experience for your website visitors and enhances the security of your communication channels.
                                    </span>
                                  </div>
                  
                      </div>
                      <div className='cyber_center_2'>
                                
                                  <div> <a href=""><SiSpringsecurity size={30}/></a></div>
                                  <div>

                                   <Link className='link_1' to="/Bitss_verifies"> <span>Bitss V verifies IT identity, identification of  false fake copy sites, advertising, brand  infringement</span></Link>
                                  
                                  <span className='cyber_span_2'>Bitss V offers a powerful and proactive approach to ensure the legitimacy of your digital presence and protect your brand from unauthorized use.</span>
                                  </div>
                      </div>
                </div>
{/* ----------------------------------last------------------------------ */}
                <div className='cyber_last'>
                      <div className='cyber_last_container'>
                    

                    <div>
                        <img className='cyber_img_11' src="https://bitss.fr/wp-content/uploads/2023/07/bitss_cyber_security_img_2.webp" alt="" />
                    </div>
                    <div>
                        <h3 className='cyber_text11'>"Fortify Your Digital Defense with Bitss Security: Your Shield Against Cyber Threats! and Safeguard Your Business with Bitss Security: Unleash the Power of Protection!"</h3>
                    </div>
                    <div className='cyber_down_content'>
                             <div>
                                   <button className='cyber_btn_11'> <TfiEmail/><a  className='gg' href=""> Countact Us   </a></button>

                             </div>
                             <div>
                              <img className='cyber_logo_22'  src="	https://bitss.fr/wp-content/uploads/2023/07/bitss_cyber_security_img_7.webp" alt="" />
                             </div>
                            

                    </div>


                      </div>
                      
                </div>




                            </div>

        </div>
      
    </div>
  )
}

export default Cyber
