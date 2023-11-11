import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cyber from './components/nav_other_component/Cyber'
import Section13 from './components/Section13'
import Cookie_policy from './components/ABOUT_US/Cookie_policy'
import Praivacy_policy from './components/ABOUT_US/Praivacy_policy'
import Nav from './components/Nav'
import Section2 from './components/Section2'
import Section10 from './components/Section10'
import Section9 from './components/Section9'
import Section8 from './components/Section8'
import Section7 from './components/Section7'
import Section6 from './components/Section6'
import Section4 from './components/Section4'
import Section3 from './components/Section3'
import Section1 from './components/Section1'
import Section12 from './components/Section12'
import Section11 from './components/Section11'
import General from './components/Genral'
import Network_contain from './components/NETWORK_PROTECTION/NEtwork_contain/Network_contain'
import Contain from './components/Nav_bitss/Contain'
import Bitss_C_antispam_contain from './components/Bitss C antispam/Bitss_C_antispam_contain'
import Contact_page from './components/Contact_Us/Contact_page'
import Bitss_wd_home_container from './components/Bitss WP for database website protection/Bitss_wd_home_container'
import Bitss_V_verifies_container from './components/Bitss V verifies IT identity/Bitss_V_verifies_container'
import Bitss_server_database_CONTAINER from './components/Bitss S for dedicated server database protection/Bitss_server_database_CONTAINER'
import BITSS_Cyber_Security_CONTAIN from './components/BITSS Cyber Security/BITSS_Cyber_Security_CONTAIN'


const Router = () => {

  
  return (


    
    <div>
        <BrowserRouter>
        
        <Routes>
   
     <Route path='/' element={<Home/>}/>
     <Route path='/nav' element={<Nav/>}/>
     <Route path='/cyber' element={<Cyber/>}/>
     <Route path='/footer' element={<Section13/>}/>
     <Route path='/cookie' element={<Cookie_policy/>}/>
     <Route path='/praivacy' element={<Praivacy_policy/>}/>
     <Route path='/general' element={<General/>}/>
     <Route path='/section1' element={<Section1/>}/>
     <Route path='/BITSS_Cyber_Security' element={<BITSS_Cyber_Security_CONTAIN/>}/>
     <Route path='/section2' element={<Section2/>}/>
     <Route path='/section3' element={<Section3/>}/>
     <Route path='/section4' element={<Section4/>}/>
     <Route path='/section6' element={<Section6/>}/>
     <Route path='/section7' element={<Section7/>}/>
     <Route path='/section8' element={<Section8/>}/>
     <Route path='/section9' element={<Section9/>}/>
     <Route path='/section10' element={<Section10/>}/>
     <Route path='/section11' element={<Section11/>}/>
     <Route path='/section12' element={<Section12/>}/>
     <Route path='/section13' element={<Section13/>}/>
     <Route path='/contain' element={<Contain/>}/>

     <Route path='/bitss_c' element={<Bitss_C_antispam_contain/>}/>

     <Route path='/contact_us' element={<Contact_page/>}/>
     

     <Route path='/Network_contain' element={<Network_contain/>}/>


     <Route path='/Bitss_wd_home' element={<Bitss_wd_home_container/>}/>

     <Route path='/Bitss_verifies' element={<Bitss_V_verifies_container/>}/>
     
     <Route path='/Bitss_server_database' element={<Bitss_server_database_CONTAINER/>}/>
     


    
     




    



        </Routes>
        
        
        
        </BrowserRouter>
      
    </div>
  )
}

export default Router
