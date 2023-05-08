import React from 'react';
import {SubHeadinf, SubHeading} from '../../components';
import {images} from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding 'id="home">
   <div className='app__wrapper_info'> <SubHeading  title="chase the new flavour" />
   <h1 className='app__header-h1'>The Key of Fine Dining</h1>
   <p className='p__opensans' style={{margin:'2rem 0'}}>Lorem Ipsum is simply dummy text standard dummy, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
   <button type='button' className='custom__button'>Explore Menu</button>
   </div>
   <div className='app__wrapper_img'>
    <img src={images.welcome} alt='header img'/>
   </div>
  </div>
);

export default Header;
