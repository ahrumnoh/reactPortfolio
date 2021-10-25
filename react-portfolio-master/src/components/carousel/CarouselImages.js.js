import React, {Component} from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css"; 
import {GoProject} from 'react-icons/go'
import {FaArrowCircleDown} from 'react-icons/fa'
import Hello from '../images/2021-08-03 (11).png'
import Pencil from '../images/2021-07-18 (15).png'


 class CarouselImages extends Component {
     render(){
    return (
        <div className={classes.carousel_container} id="start">
                {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
            <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay  showStatus={false} showThumbs={false} >
                <div  className={classes.image_container} >
                    <img className={classes.image} src={Hello}  alt="myImage"/>
                    <div  className={classes.h1}>
                       <h1 >I'm Ahrum Noh</h1>
                       <a href="https://ahrumnoh.github.io/introahrum/" rel="ahrumnoh" target="_blank">VIEW CV   <FaArrowCircleDown/></a>
                    </div>
                </div>
                <div className={classes.image_container}>
                    <img className={classes.image} src={Pencil} alt="myImage"/>
                    <div  className={classes.h2}> 
                    <h1> Portfolios</h1>
                    <h1>Here are my projects!😍</h1>
                    <a href="https://ahrumnoh.github.io/introahrum/#portfolio" rel="opener noreferrer" target="_blank">VIEW PROJECTS   <GoProject/></a>
                    </div>
                </div>
            
            </Carousel>
          {/* </ScrollAnimation> */}
        </div>
     )
    }
}
export default CarouselImages