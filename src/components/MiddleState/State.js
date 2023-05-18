import React  , {useState , useEffect}from 'react'
import './State.css'


const State = ()=>{
    let count = 0;
    function PlusCounter(event){
        setInterval(() => {
            if (count < 100) {
              count++;
              document.querySelectorAll(".span").forEach((el)=>{
                el.innerText = count
              })
            }
          },50);
    }
    return(
        <div class="ParentState" onMouseMove={PlusCounter} id="state">
        <div class="State">
            <h1>إحصائيتنا</h1>
            <div><span>13</span><p>موظف</p></div>
            <div><span class="span">0</span><p>شريك نجاح</p></div>
            <div><span class="span">0</span><p>تصميم</p></div>
        </div>
        </div>
    )
}
export default State