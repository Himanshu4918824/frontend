
import EventScroll from "@/components/EventScroll";
import HomePage from "./homepage/page";
import Gallery from "@/components/Gallery";

export default function Home() 
{
  return (
    <div>

      <div>
        <HomePage/>
      </div>

      <div>
        <EventScroll/>
      </div>

      <div>
        <Gallery/>
      </div>

    </div>
    

    
  );
}