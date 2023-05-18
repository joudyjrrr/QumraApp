import React  from 'react';
import './WhoUs.css'
import who  from '../img/qMark.b7ffc8bf.png'
import main from  '../img/1.d681365e.png'

const WhoUs = ()=>{
    return(
        <div class="whoUs" id="who">
        <img src={main} alt="" srcset=""/>
        <div class="aboutUs">

            <h1>من نحن</h1>
            <img src={who} alt=""/>
              <p>تلبية للطلب المنتامي في مجال التسويق الرقمي تأسست شركة قُمرة الإمارة التسوقية والتي تتضمت إدارة منصات التواصل الإحتماعي والحملات المدفوعة وجميع أنواع التصاميم والمحتوى وتصاميم الفيديو وبالإضافة إلى العديد من الخدمات التسويقية الأخرى لمختلف القطاعات والشركات بمختلف أحجامها وأنواعها.. </p>

        </div>
</div>
    )
}
export default WhoUs