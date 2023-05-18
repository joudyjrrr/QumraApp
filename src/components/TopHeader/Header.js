import './Header.css'
import React from 'react';
import logo from '../img/1.d681365e.png'
import menu from '../img/icons8-menu-50.png'
import close from '../img/icons8-close-50.png'
import Link from  'react-router-dom';

const Header = ()=>{
    function ShowMenu(event){
        console.log(event.currentTarget)
        document.querySelector("ul").classList.add("show")
        document.querySelector(".close").classList.add("ShowClose")
        document.querySelector(".close").classList.remove("hidden")
        document.querySelector(".menu").classList.add("hidden")
        console.log( document.querySelector(".close"))
    }
    function RemoveMenu(event){
        document.querySelector("ul").classList.remove("show")
        document.querySelector(".menu").classList.toggle("hidden")
        document.querySelector(".close").classList.toggle("hidden")
    }

 return(
    <header>
    <nav class="">
     <div class="imge"> <a href="#home"><img src={logo} alt=""/></a></div>
     <div class="menu" onClick={ShowMenu}><img src={menu}/></div>
     <div class="close" onClick={RemoveMenu}><img src={close}/></div>
     <ul class="">
         <li><a href="#who" class="Link">من نحن</a></li>
         <li><a href="#state" class="Link">إحصائيتنا</a></li>
         <li><a href="#servises" class="Link">خدماتنا</a></li>
         <li><a href="#company" class="Link">عملائنا</a></li>
         <li><a href="#work" class="Link">أعمالنا</a></li>
     </ul>
    </nav>
 </header>
 )
}
export default Header