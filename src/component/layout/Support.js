import React, { useRef, useState } from 'react'
import MetaData from './MetaData'
import { useAlert } from 'react-alert';
import "./Support.css";
import emailjs from "@emailjs/browser";
import BottomTab from './Header/BottomTab';


const Support = ({history}) => {
    
    const alert = useAlert();

    const [done, setDone] = useState(false);

    const formRef = useRef(null)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push("/") 
        emailjs.sendForm('service_7be8t0n', 'template_q6oankt', formRef.current, 'user_XiIxNsDzs1ebEgXJcyD1U')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }

    return (
       <>
       <MetaData title="Support"/>
       <div 
       className='support'
       style={{
           width:"100%",
           justifyContent:"center",
           alignItems:"center",
           padding:'50px 0'
       }}>
           <h2 className='support__heading' style={{
               textAlign:"center"
           }}>Hey How can we improve our services</h2>
           <h2  className='support__heading' style={{
               textAlign:"center"
           }}>Report us for something...</h2>
           <div>
               <form style={{
                   width:"400px",
                   margin:"auto",
                   padding:"20px 0"
               }} ref={formRef}
               onSubmit={handleSubmit}
               >
                   <input type="text" placeholder='Write your Name ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }} 
                   name='user__name'
                   />
                    <input type="text" placeholder='Write a Subject ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}
                   name='user__subject'
                   />
                   <input type="text" placeholder='write your Email ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}/>
                   <textarea cols="30" rows="5" required placeholder='write your message ...'
                   style={{
                    border:"none",
                    outline:"none",
                    width:"100%",
                    borderBottom:"1px solid #3BB77E",
                    margin:"10px 0",
                    fontSize:"1.2vmax",
                }}
                name='user__message'
                   ></textarea>
                   <button 
                   style={{
                       border:"none",
                       cursor:"pointer",
                       width:"100%",
                       background:"#3BB77E",
                       height:"40px",
                       margin:"10px 0",
                       color:"#fff",
                       fontSize:"1.2vmax"
                   }}
                   >Submit</button>
                   {done && alert.success("Thanks for your report")}
               </form>
               <div className='animation'>

               </div>
           </div>
       </div>
       <BottomTab />
       </>
    )
}

export default Support
