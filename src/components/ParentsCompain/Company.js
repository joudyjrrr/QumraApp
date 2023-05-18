import './Company.css'
import React  from 'react';
import comp from '../img/home.png'

const Company =()=>{
return(
    <div class="parentCompany" id="company">
    <div class="Title">
        <h2>الشركات المصمم لها</h2>
    </div>

<div class="companyGroub slide-right">
<img src={comp}/>
<img src={comp}/>
<img src={comp}/>
<img src={comp}/>
</div>
<div class="companyGroub  slide-right">
<img src={comp}/>
<img src={comp}/>
<img src={comp}/>
<img src={comp}/>
</div>
<div class="companyGroub  slide-right">
<img src={comp}/>
<img src={comp}/>
<img src={comp}/>
<img src={comp}/>
</div>
<div class="companyGroub  slide-right">
<img src={comp}/>
<img src={comp}/>
<img src={comp}/>
<img src={comp}/>
</div> 
<div class="companyGroubSquare slide-right " id="work">
<img src={comp}/>
<img src={comp}/>
<img src={comp}/>
</div>
<div class="companyGroubSquare slide-right">
<img src={comp}/>
<img src={comp}/>
<img src={comp}/>
</div>
<div class="companyGroubSquare slide-right">
<img src={comp}/>
<img src={comp}/>
<img src={comp}/>
</div>
    </div>

)
}
export default Company