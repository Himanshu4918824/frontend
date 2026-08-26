"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function EventScroll()
{
  const sliderRef = useRef(null);
  
     var data=[ {eventname:'Independence Day Camp', area:'Bihar patna', picture:'aboutpic.png',   productstatus:'Treanding'},

        {eventname:'Independence Day Camp', area:'Bihar patna', picture:'aboutpic.png',   productstatus:'Treanding'},
        {eventname:'Independence Day Camp', area:'Bihar patna', picture:'aboutpic.png',   productstatus:'Treanding'},
        {eventname:'Independence Day Camp', area:'Bihar patna', picture:'aboutpic.png',   productstatus:'Treanding'},
        {eventname:'Independence Day Camp', area:'Bihar patna', picture:'aboutpic.png',   productstatus:'Treanding'},
        {eventname:'Independence Day Camp', area:'Bihar patna', picture:'aboutpic.png',   productstatus:'Treanding'},
        {eventname:'Independence Day Camp', area:'Bihar patna', picture:'aboutpic.png',   productstatus:'Treanding'},
        {eventname:'Independence Day Camp', area:'Bihar patna', picture:'aboutpic.png',   productstatus:'Treanding'},
        {eventname:'Independence Day Camp', area:'Bihar patna', picture:'aboutpic.png',   productstatus:'Treanding'},

      

          ]

          const showData=()=>{
            return data.map((item,i)=>{
              return(<div style={{display:'flex',flexDirection:'column'}}>
                <div >
                  <img src={`images/${item.picture}`} style={{ width: "70%" }}/>
                </div>

                <div>
                  {item.eventname}
                </div>

                <div>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  {item.area}
                </div>

                  <div style={{color: "#a00012", fontSize: 16, fontWeight: 600, margin:2}}>
                    View Details →
                  </div>

              </div>)
            })
          }
          

           const settings = {
                  dots: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 4,
                  slidesToScroll: 1,
                   arrows: true,

                   
                 };



          
          return(<div className="container p-5" style={{marginLeft:'10%'}}>

            <div style={{fontSize:24,fontWeight:700,letterSpacing:1.2, textTransform: "capitalize"}}>
              Upcoming  <span style={{color:'#a00012'}}> Events</span>
            </div>
            

            <div style={{position:'relative'}}>
              <div onClick={() => sliderRef.current?.slickNext()} style={{position:'absolute',zIndex:2,width:50,height:20,display:'flex',justifyContent:'center',alignItems:'center',top:'40%',left:0}}>
                <i class="bi bi-arrow-left-circle-fill" style={{fontSize:24,color:'#fff'}}></i>   
              </div>
              

             <Slider ref={sliderRef} {...settings}>
              {showData()}
             </Slider>

             <div onClick={() => sliderRef.current?.slickPrev()} style={{position:'absolute',zIndex:2,width:50,height:20,display:'flex',justifyContent:'center',alignItems:'center',right:'3%',top:'40%'}}>
               <i class="bi bi-arrow-right-circle-fill" style={{fontSize:24,color:'#000'}}></i> 
              </div>

             

            </div>

          </div>)


    
}