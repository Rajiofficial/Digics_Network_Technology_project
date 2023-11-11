import React from 'react'
import "./Css/section6.css"
import{FcBusinessman} from 'react-icons/fc'
import{FaBarcode} from 'react-icons/fa'
import{SiEbox} from 'react-icons/si'
import{BsAlarm} from 'react-icons/bs'
import{HiOutlineLightBulb} from 'react-icons/hi'
import{SlDiamond} from 'react-icons/sl'



const Section6 = () => {
  return (
    <div className='nj'>
<div className='sec_6_container'>

<div className=' sec_6_bb'> 
<h4>BEST SERVICES</h4>
<h1>Our Services</h1>
     </div>


<div className='sec_6_text_con'>

<div className='sec_6_text_con_1'>
    <div className='sec_6_text_con_2'>
        <div><FcBusinessman size={40} color='black' /></div>
        <div>
            <h3 className='sec_6_h'>Best Support</h3>
           <p className='sec1_6_t1'>Bitss support package includes:

*Upgrading with new security measures through ongoning research. *Training.

*Assistance in placing the software. The package is included in the initial software price. there after an aordable support pack</p>
        </div>
    </div>
    <div className='sec_6_text_con_2'>

    <div><SiEbox size={40}/></div>
        <div>
            <h3 className='sec_6_h'>
                    Security Awareness Training                </h3>
            <p className='sec1_6_t1'>
            Our cyber security experts engaging and tailored security awareness training programs educate your employees about the latest threats and equip them with practical skills to detect and mitigate potential risks.
            </p>
    
        </div>
    </div>
</div>
{/* ----------2222222222222222222222222222222 */}

<div className='sec_6_text_con_1'>
     <div className='sec_6_text_con_center'>
<div><FaBarcode size={40}/></div>
<div>
            <h3 className='sec_6_h'>
                    Quick Response                </h3>
            <p className='sec1_6_t1'>
            We recognize the urgency and critical nature of cyber incidents. Our dedicated incident response team is available around the clock to swiftly address any security breaches or threats that may arise. We understand the importance of immediate action, and we pride ourselves on our ability to respond rapidly, minimizing the impact and ensuring a timely resolution as 24/7 security monitoring.
            </p>
    
        </div>
     </div>
      <div className='sec_6_text_con_2'>



      <div><HiOutlineLightBulb size={40}/></div>
<div>
            <h3 className='sec_6_h'>
                    Real Solutions                </h3>
            <p className='sec1_6_t1'>
            Our approach is rooted in practicality and real-world applicability to your business data protection. Through our extensive experience and deep industry knowledge, we provide customized recommendations and strategies tailored to your specific requirements and secure digital assets.
            </p>
    
        </div>
            

      </div>
</div>


{/* -------------------3333333333333333------------ */}

<div className='sec_6_text_con_1'>
    <div className='sec_6_text_con_2'>
        
        <div><SlDiamond size={40}/></div>
<div>
            <h3 className='sec_6_h'>
                    Audits and Risk Assessments                </h3>
            <p className='sec1_6_t1'>
            Our experts evaluate your security controls, policies, and procedures to ensure adherence to industry regulations such as GDPR, HIPAA, and PCI DSS. By identifying gaps and providing actionable recommendations, we assist you in meeting compliance requirements effectively.
            </p>
    
        </div>
    </div>
    <div className='sec_6_text_con_2'>

    <div><BsAlarm size={40}/></div>
<div>
            <h3 className='sec_6_h'>
                    Secure Code Review and Application Security                </h3>
            <p className='sec1_6_t1'>
            Our meticulous code review process examines your applications to identify vulnerabilities at the source code level. We employ industry-leading tools and methodologies to uncover potential weaknesses that could be exploited by attackers.
            </p>
    
        </div>
    </div>
</div>

</div>
</div>

      
    </div>
  )
}

export default Section6
