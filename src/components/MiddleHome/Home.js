import './Home.css'
import React, {useState,useEffect} from 'react';
import prev  from '../img/prev.png'
import next from '../img/next.png'
import img1 from '../img/home22.png';
import img2 from '../img/home22.png';
import img3 from '../img/home22.png';

const Home = ()=>{

return(
    <div id="home" class="">
    <div class="slideText">
        <h1>شركة قُمرة الإمارة</h1>
        <p>8 سنوات من الإبداع والعطاء</p>
    </div>
    <a href="" class="btn">احصل على خدمتنا الان</a>

      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner befour">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
)
}
export default Home