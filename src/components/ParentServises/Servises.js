import './Servises.css'
import React  from 'react';
import serve1 from '../img/serv1.1fbaafa1.png'
import serve2 from '../img/serv2.27c0bcb6.png'
import serve3 from '../img/serv3.3cf07e45.png'
import serve4 from '../img/serv4.7add1257.png'
import serve5 from '../img/serv5.f6683578.png'
import serve6 from '../img/serv6.6a7c91cf.png'


const Servises = ()=>{
return (
    <div class='ParentServises' id="servises">
        <div class="servisesGroub1">
            <div class="ServisesCard">
                 <h2>بناء الهوية البصرية</h2> 
                 <div>
                 <img src={serve1}/> 
                 </div>  
            </div>
            <div class="ServisesCard">
                 <h2> تصميم الغرافيك والتصاميم</h2> 
                 <div>
                 <img src={serve2}/> 
                 </div>  
            </div>
        </div>

        <div class="servisesGroub1">
            <div class="ServisesCard">
                 <h2>إدارة منصات التواصل الاجتماعي</h2> 
                 <div>
                 <img src={serve3}/> 
                 </div>  
            </div>
            <div class="ServisesCard">
                 <h2>إعدداد استراتيجيات وخطط المحتوى</h2> 
                 <div>
                 <img src={serve4}/> 
                 </div>  
            </div>
        </div>
        <div class="servisesGroub1">
            <div class="ServisesCard">
                 <h2> تصميم تطبيقات الموبايل</h2> 
                 <div>
                 <img src={serve5}/> 
                 </div>  
            </div>
            <div class="ServisesCard">
                 <h2> تصميم المواقع الإلكترونية</h2> 
                 <div>
                 <img src={serve6}/> 
                 </div>  
            </div>
        </div>
        
    </div>
)
}
export default Servises