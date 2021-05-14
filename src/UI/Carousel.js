import React from 'react';
import {Carousel} from 'react-bootstrap';
import avtar from '../undraw_reading_time_gvg0.svg'
import avtar2 from '../Website.svg'
import avtar3 from '../websiteRead.svg'
const CarouselPage=()=>{
    return(
<Carousel fade  style={{marginTop:'1px'}} interval={1300} indicators={false} >
  <Carousel.Item style={{height:"20rem"}}>
    <img
      className="d-block w-100"
      src={`${avtar}`}
      alt="First slide"
      height='100%'
      width='100%'
      style={{backgroundColor:'#FFF'}}
    />
  </Carousel.Item>
  <Carousel.Item style={{height:"20rem"}}>
    <img
      className="d-block w-100"
      src={`${avtar2}`}
      alt="Second slide"
      height='100%'
      width='100%'
      style={{backgroundColor:'#FFF'}}
    />
  </Carousel.Item>
  <Carousel.Item style={{height:"20rem"}}>
    <img
      className="d-block w-100"
      src={`${avtar3}`}
      alt="Third slide"
      height='100%'
      width='100%'
      style={{backgroundColor:'#FFF'}}
    />
  </Carousel.Item>
</Carousel>
);
}
export default CarouselPage;