import React, { useMemo, useState } from 'react'
import "../Contact_Us/contact.css"
import {FaMap,FaPhone} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import countryList from "react-select-country-list"
import Select from 'react-select'
import Section13 from '../Section13'
const Contact = () => {


   const [name ,setname]=useState("")
   const [email ,setemail]=useState("")
   const [phone ,setphone]=useState("")
   const [country ,setcountry]=useState("")
   const [productquery ,setproductquery]=useState("")
   const [message ,setmessage]=useState("")



    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
        setcountry(value)
      }





const handlesubmit=(e)=>{
e.preventDefault()
const ans={name,email,phone,   country,productquery,message}
console.log(ans)
}



  return (
    <div className='contact_container_head'>
         

      <div className='contact_container'>
             <div className='contact_wrapper'>
                <div>
                <span className='contact_title'>Say Hello</span>
                </div>
              

               <div>
              <p class="elementor-image-box-description_9">At bitss.fr by Bfin Sasu, we are more than just a cyber security provider. We are your trusted partner in achieving success by ensuring the resilience and security of your digital assets. Our comprehensive approach, personalized solutions, and commitment to excellence set us apart.</p>
              </div>

{/* -------------------google map----------------- */}

<div >
<iframe className='google_maps_contact_page' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11591.591960396512!2d3.708411!3d43.420958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1357c2efa6fbb%3A0xddfc93666aef9f37!2s8%20Rue%20de%20Dublin%2C%2034200%20S%C3%A8te%2C%20France!5e0!3m2!1sen!2sus!4v1699499669186!5m2!1sen!2sus"></iframe>
</div>


{/* ===============contact us======================= */}

<div>

               <div>
                <span className='contact_title_1'>Contact Us</span>
                </div>
                <div>
                    <ul className='contact_ul'>
                    <li class="elementors-icon-list-item">
											<span class="elementor-icon-list-icon">
							<FaMap color='#8F8F8F'/>					</span>
										<span class="elementor-icon-list-text">BITSS BFIN SASU, 8 RUE DUBLIN 34200 SÈTE FRANCE</span>
									</li>

                                    <li class="elementors-icon-list-item">
											<a href="http://support@cameleasy.com" target="_blank" rel="noopener">

												<span class="elementor-icon-list-icon">
							           <MdEmail color='black'/></span>
										<span class="elementors-icon-list-text_center">support@bobosohomail.com</span>
											</a>
									</li>

                                    <li class="elementors-icon-list-item">
											<span class="elementor-icon-list-icon">
							        <FaPhone color='#8F8F8F'/>					</span>
										<span class="elementor-icon-list-text">+0033666100010</span>
									</li>
                    </ul>
                </div>



                <form  onSubmit={handlesubmit} className='form'>

                            <label className='contact_lables' >Name*</label>
                            <input className='dd' type="text" value={name} onChange={(e)=>{setname(e.target.value)}} />

                            <label className='contact_lables' >Email*</label>
                            <input className='dd' type="email"  value={email} onChange={(e)=>{setemail(e.target.value)}}/>

                            <label className='contact_lables' >Phone*</label>
                            <input className='dd' type="number"  value={phone} onChange={(e)=>{setphone(e.target.value)}} />
                            
                            <label className='contact_lables_cun' >country*</label>
                            <div >
                            <Select placeholder="please select your country" className='form_country'options={options} value={value} onChange={changeHandler} />
                            </div>

                            <label className='contact_lables_1' >Subject / Product Query *</label>
                            <input className='dd' type="text"   value={productquery} onChange={(e)=>{setproductquery(e.target.value)}}/>
                             
                            <label className='contact_lables_msg' >Message*</label>
                            <input className='dd_msg' type="text"  value={message} onChange={(e)=>{setmessage(e.target.value)}} />
                     
                            <p class="text-body-secondary">Note: Before submit, please make sure that you fill/select all required filed marked by star(*).</p>
                            <label class="form-label">CAPTCHA MATH: * 91 + 53 =</label>
                             
                            {/* <div id="bfin-contact-form-message" className="bfin-contact-form-message success">Your message has been successfully submitted. We appreciate your interest and will respond to you as soon as possible.</div> */}
                           
                            <button type="submit" className="btn-primary">Submit</button>
                             <div className='final_con'>
                             <small className='contact_last' >© 2023 BFIN. BITSS by BFIN. All rights reserved.</small>
                             </div>
                           
                           <div className='final_con'>
                           <small className="credit" >This form is powered by 
			<a href="https://bitss.fr" target="_blank" rel="nofollow">
				<img  src="https://bitss.fr/wp-content/plugins/bitss-contact-form/bitss_icon.png" />
			</a>
		</small>
                           </div>
               
               
               
                </form>
    


</div>





             </div>
            

      </div>
      <div className='contact_foo'>
      <Section13/>
      </div>

    </div>
  )
}

export default Contact
