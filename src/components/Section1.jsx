import React from 'react'
import "./Css/section1.css"
import {Link} from "react-router-dom"
const Section1 = () => {
  return (
    <div>
      


<div className='container1'>
    

       <div className='wrapper'>
<div className='con1_title'>
<h1 className='con1_color_1'>Welkom to </h1>
<h1 className='con1_color_2'>BITSS.fr</h1>
       <div className='con1_color'>Jou betroubare kuberveiligheidsvennoot</div>
        <h7 className='con1_color1'>Kubersekuriteitsdienste</h7>
</div>
<div className='con1'>

    
    Bitss deur BFIN - 'n Franse toonaangewende navorsingsmaatskappy vir kuberveiligheid 

wat toegewy is om te stop: 
    
   <br />
   <br />



Stop Netwerk, bediener, webwerf Databasisdiefstal, indringing, inbraak, gyselaars losprys 

eise, data diefstal, kliënt data diefstal, seerower webwerf betalings, strooipos van webwerf 

kontak bladsy om 'n paar sekuriteit kenmerke te noem.
<br />
<br />
Bitss het vyf unieke kuberveiligheidstelsels wat netwerke, bedieners, webwerwe, videowebwerwe en 

kontakbladsy-strooipos beskerm.

Of jy nou 'n klein besigheid, 'n groot onderneming of 'n individu is, Bitss is bekostigbaar. 



</div>


<div className='con1_btns'>

          <div> <Link  to="/BITSS_Cyber_Security"><button className='con1_btn1'>LEE MEER</button></Link></div>
<div><Link to="/contact_us"><button  className='con1_btn2'> CONTACT US </button></Link></div>


</div>
      
       </div>


</div>



    </div>
  )
}

export default Section1
