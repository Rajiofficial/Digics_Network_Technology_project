import React from 'react'
import "../BITSS Cyber Security-CSS/BITSS_Cyber_Security_CLONE.css"
import {GrServerCluster} from "react-icons/gr"
import {AiOutlineFileSearch} from "react-icons/ai"
import {SiSpringsecurity} from "react-icons/si"
import {FaServer} from "react-icons/fa"
import {TbWorldSearch} from "react-icons/tb"
import {TfiEmail} from "react-icons/tfi"
import { Link } from 'react-router-dom'



const BITSS_Cyber_Security_CLONE = () => {
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
           




                        </div>

    </div>
  
</div>
  )
}

export default BITSS_Cyber_Security_CLONE
