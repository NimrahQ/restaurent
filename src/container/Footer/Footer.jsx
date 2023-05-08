import React from 'react';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding app__bg'>
    <FooterOverlay />
  <Newsletter />

  <div className='app__footer-links '>
    <div className='app__footer-links_contact'>
      <h1 className='app__footer-headtext'>Contact</h1>
      <p className='p__opensans'>9 W 53rd st,Karachi,Khi 10019,Pakistan</p>
      <p className='p__opensans'>+1 2020 2938 77</p>
      <p className='p__opensans'>+9 6548 7909 68</p>
      {/* <p className='p__opensans'>9 W 53rd st,Karachi,Khi 10019,Pakistan</p> */}
    </div>

    <div className='app__footer-links_logo'>
      <img src={images.gericht} alt="footer_logo" />
      <p className='p__opensans'>The best way to find your taste in services of Our place</p>
      <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:'15px'}} />
      <div className='app__footer-links_icons'>
        <FiFacebook/>
        <FiTwitter/>
        <FiInstagram/>
      </div>
    </div>
    <div className='app__footer-links_work'>
    <h1 className='app__footer-headtext'>Working Hours</h1>
      <p className='p__opensans'>Monday - Friday</p>
      <p className='p__opensans'>08:00am - 12:00pm</p>
      <p className='p__opensans'>Sataurday - Sunday</p>
      <p className='p__opensans'>11:00am - 3:00pm</p>
    </div>

    <div className='app__footer-links_work'></div>
  </div>
  <div className='footer__copyright'>
    <p className='p__opensans'>2023 Gericht .All Rights Reserved</p>
  </div>
  </div>
);

export default Footer;
