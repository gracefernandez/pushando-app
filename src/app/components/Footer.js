import React from 'react';
import {  Box, Container } from '@mui/material';
import styles from './Footer.module.css';
import skatemamisLogo from '../public/LogoOf.png' ;
import Image from 'next/image';

const Footer = () => {
  return (
      <footer className={styles.foot} >
        <div className={styles.footContainer}>

     
        <Image
            src={skatemamisLogo} // Route of the image file
            height={120} // Desired size with correct aspect ratio
            width={120} // Desired size with correct aspect ratio
            alt='skm-logo'
            priority
            />
         <p>
          Vivo Pushando © 2024
          sponsored by Skatemamis 
        </p>
          <p>You can Follow and Support this project! </p> 
          <div className={styles.flinks}> 
          <a className={styles.shopLink} href="https://www.skatemamis.com/shop" target="_blank" rel="noopener noreferrer">
             Shop </a>
          <a className={styles.shopLink}  href="https://www.instagram.com/vivopushando/" target="_blank" rel="noopener noreferrer">
            Instagram </a>
         </div>  
          </div>
      </footer>
       
  );
};

export default Footer;
