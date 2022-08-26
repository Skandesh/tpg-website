import youtube from '../assets/img/youtube.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Events = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="event" id="events">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="event-bx wow zoomIn">
                        <h2>Events</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
            
                                <a href="https://docs.google.com/presentation/d/1YR-N9IJdizFdRUfr0R4IfpGDGShZvIXagFHh5NS61hA/edit#slide=id.g122ead69140_0_344"><h2>Educational Sessions</h2></a>
                            </div>
                            <div className="item">
                                
                                <a href="https://twitter.com/oceanprotocol/status/1512005497716502528"><h2>Ocean protocol Meetup</h2></a>
                            </div>
                            <div className="item">
                               
                            <a href="https://twitter.com/PhoenixGuildHQ/status/1539284275312197633"><h2>Blockon Meetup</h2></a>
                            </div>
                            <div className="item">
                               
                               <a href="https://twitter.com/PhoenixGuildHQ/status/1547496414359523328"><h2>Bicononmy Workshop in Metapass</h2></a> 
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
