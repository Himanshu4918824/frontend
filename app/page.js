
//import EventScroll from "@/components/EventScroll";
import Gallery from "@/components/Gallery";
import HomePage from "./homepage/page";
//import Gallery from "@/components/Gallery";
import UpcomingEvents from "@/components/UpcomingEvent";
import WhyBihar from "@/components/WhyBihar";

export default function Home() 
{
  return (
    <div>

      <div>
        <HomePage/>
      </div>

      <div>
        <WhyBihar/>
      </div>

      <div>
        <Gallery/>
      </div>

      <div>
        {/*<EventScroll/>*/}
        <UpcomingEvents/>
      </div>

      

      

    </div>
    

    
  );
}