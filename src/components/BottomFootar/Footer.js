import React from 'react'
import './Footer.css'
import Gm from '../img/icons8-gmail-logo-48.png'
import Fac from '../img/icons8-facebook-50.png'
import insta from '../img/icons8-instagram-50.png'
import tweit  from '../img/icons8-twitter-50.png'
import whts from '../img/icons8-whatsapp-50.png'
import snap from '../img/icons8-snapchat-50.png'


const Footer = ()=>{
return(
    <div class="footer">
       <div class="title">
        <h1>تواصل معنا</h1>
       </div>
       <div class="social">
          <a href="#"><img src={Gm}/></a>
          <a href="#"><img src={snap}/></a>
          <a href="#"><img src={whts}/></a>
          <a href="#"><img src={insta}/></a>
          <a href="#"><img src={tweit}/></a>
          <a href="#"><img src={Fac}/></a>
       </div>
   </div>
)
}
export default Footer