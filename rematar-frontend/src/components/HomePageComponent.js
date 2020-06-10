import React, { useState } from 'react';
import {Row, Carousel, CarouselItem, Card, CarouselIndicators, CarouselControl, CardImgOverlay} from 'reactstrap';
import CardGallery from "./CardGalleryComponent";
import {MDBContainer, MDBRow, MDBBtn, MDBFormInline,MDBCol} from "mdbreact";
import FiltrosForHome from './FiltrosForHome';
import NavFiltro from "./NavFiltro";

import { itemslist } from '../data/items_terrenos';



const HomePage = (props) => {
      let categories = 'home';
      let items = itemslist[0]['items'];
      const [activeIndex, setActiveIndex] = useState(0);
      const [animating, setAnimating] = useState(false);

   //itemslist = props.itemslist;
   //handleChange = handleChange.bind(this);
   //Auth = new AuthService();  TODO:  ver AuthService

   const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
   }

   const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
   }

   const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
   }

   const slides = items.map((item) => {
      return (
         <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.key}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
         >
            <img src={item.src} className="w-header" style={{height: "100%", width: "100%"}} alt={"fondo"}/>
         </CarouselItem>
      );
   });

        return (

         <div>
            <div className="p-0 m-0" style={{ height: '600px'}}>
               <div className="container-fluid no-padding h-25 p-0 m-0 ">

                  <div  style={{ height: '70vh' }} className="p-0 m-0">
                     <style>
                        {`.custom-tag {
                              max-width: 100%;
                              height: 600px;
                              background: black;
                        }`}
                     </style>
                     <Card style={{ width: "100%"}}>
                        <Carousel
                           slide={false}
                           activeIndex={activeIndex}
                           next={next}
                           previous={previous}
                        >
                           <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                           {slides}
                           <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                           <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>

                        <CardImgOverlay className="text-white justify-content-center text-center align-text-bottom h-75 mt-5">
                           <div className="">
                              <Row className="my-5">
                                 <h3 className="w-100 text-white-100 text-white" style={{fontSize: "30px"}}>
                                    <b>{ itemslist.length } Articulos disponibles este mes : </b>
                                 </h3>
                              </Row>
                              <Row className="my-5">
                                 <h1 className="w-100" ><b style={{fontSize: "60px"}}> Subastas en web </b></h1>
                              </Row>

                              <Row className="my-5">
                                 <MDBContainer  className=" mr-5">
                                    <MDBFormInline className="md-form ml-5">
                                       <input
                                          className="form-control mr-sm-1 text-white"
                                          style={{width:"80%"}}
                                          type="text"
                                          placeholder="Buscar"
                                          aria-label="Search"
                                       />
                                       <MDBBtn className="" style={{color: "black", fontSize: "15px"}} gradient="aqua" rounded size="sm" type="submit">
                                          <b>Buscar</b>
                                       </MDBBtn>
                                    </MDBFormInline>
                                 </MDBContainer>
                              </Row>
                              <Row className="my-5 d-none d-sm-block">
                                 <h2 className="w-100">Encontra las mejores inversiones</h2>
                              </Row>
                           </div>
                        </CardImgOverlay>
                     </Card>
                  </div>
               </div>
            </div>
            <div id="filterbar">
               <MDBCol className="">
                  <MDBRow className="justify-content-center">
                     <NavFiltro/>
                  </MDBRow>
               </MDBCol>
            </div>
            <CardGallery categories={categories}/>
         </div>
        );
}

export default HomePage;
