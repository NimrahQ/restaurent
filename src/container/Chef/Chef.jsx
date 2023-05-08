import React from 'react';
import { SubHeading } from "../../components";
import { images } from "../../constants";

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
  <div className='app__wrapper_img app__wrapper_img-reverse'>
    <img src={images.chef} alt="chef" />
  </div>

  <div className='app__wrapper_info'>
    <SubHeading title="Chef's Word" />
    <h1 className='headtext__cormorant'>What we believe in</h1>
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt='quote' />
        <p className='p__opensans'>olor sit amet consectetur voluptatibus non ipsa fuga dolore! Quos, eveniet!</p>
      </div>
      <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, nam natus? Nemo debitis iure necessitatibus veritatis ad iste blanditiis quis tempora, quia voluptates, magni eos voluptatum mollitia! Accusantium, eveniet animi!</p>
    </div>
    <div className='app_chef-sign'>
      <p className='p__opensans'>Kevin Luo</p>
      <p className='p__opensans'>Chef $ Founder</p>
      <img src={images.sign} alt="Sign" />
    </div>
  </div>
  </div>
);

export default Chef;
