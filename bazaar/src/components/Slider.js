import { Carousel, Col, Row, Image } from 'react-bootstrap'
import axiosAPI from "../axiosAPI";
import React, { useState, useEffect } from 'react';
import SliderBanner1 from '../static/images/offers/offer1.jpg';


const Slider = () => {
  let [banners, setBanners] = useState([]);
  useEffect(() => {
    axiosAPI.get("banners")
      .then((res) => {
        // Fetch only active banners
        const activeBanners = res.data.filter(o => o.isActive === true);
        setBanners(activeBanners);
      });
  }, [])

  return (
    <Row >
      <Col>
        <Carousel className="mt-3" prevIcon={<span className="carouselControlIcon">PREV</span>} nextIcon={<span className="carouselControlIcon">NEXT</span>}>
          {banners.sort((a, b) => a.order - b.order).map((items) => (
            <Carousel.Item>
              <Image
                className="w-100"
                src={items.bannerImageUrl}
                alt={items.bannerImageAlt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  )
}

export default Slider;