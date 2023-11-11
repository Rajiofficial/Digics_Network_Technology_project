import React, { useEffect } from 'react'
import "./Css/section4.css"
import { BiBrain } from 'react-icons/bi';
import { AiOutlineBell } from 'react-icons/ai';
import { SiSemanticuireact  } from 'react-icons/si';
import { LuMonitorSpeaker  } from 'react-icons/lu';



import Aos from 'aos'
const Section4 = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className=' section_4_hed'>

<div>

<h2 className='sec_4_head'>

  
What's More? We Can 
<h2 className='sec_4_head'>Help You Succeed.</h2>

</h2>


</div>
<div data-aos="zoom-in-up">
  <div className='sec_4_logo'>
                  
  <div>< BiBrain size={70} color='#4F5FCD'/>  
          <h2 style={{color:"#58468C"}}>Great advices</h2>
          <p className='sec_4_text'>Customized Security solutions with our top-notch cyber defense</p>  
         </div>  
    
<div> < SiSemanticuireact color='#4F5FCD' size={70} /> 
<h2 style={{color:"#58468C"}}>Extrem security</h2>
 <p className='sec_4_text'>Proative threat Monitoring and personal cyber protection</p>
 </div>

<div> <AiOutlineBell color='#4F5FCD' size={70}/>
<h2 style={{color:"#58468C"}}>Notification alert</h2>

<p className='sec_4_text'>Employee Security Awareness Programs</p>
</div>

<div> <LuMonitorSpeaker color='#4F5FCD' size={70}/>
<h2 style={{color:"#58468C"}}>Regular analytic</h2>

<p className='sec_4_text'>Contional Security Enhancement</p>
</div>
 
</div>

  </div>


    
    
  </div>


    

  
  )
}

export default Section4
