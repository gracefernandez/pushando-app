"use client";

import styles from "../app/page.module.css";
import ArrayInput from "./components/ArrayInput";
import React from "react" ;
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Divider from '@mui/material/Divider';

export default function Home() {
  const prizes = ['Stickers', 'Stickers', 'Tshirt' , '$1']
 
  return (
    <div className={styles.mains}>
      <NavBar/>
      <div className={styles.description}>
        <h1 >Instrucciones</h1>
          <p> Aquí encontraras 3 ruletas con 
            "challenges" de skateboarding de 3 niveles : </p> 
            <div className={styles.levels}>
               <p className={styles.basics}> Básico (Basic) </p>            
             </div> 
             <div className={styles.levels}> 
               <p className={styles.mids}>Intermedio (Mid) </p> 
              </div>
              <div className={styles.levels}>
               <p className={styles.hard}>Difícil (Hard)</p> 
              </div>

          <p> Cada participante escogerá el nivel y tiene <b>una</b> oportunidad para hacer dicho  reto. </p>
          <p>  Si es superado, pasa a la ruleta de "Prizes"  del nivel escogido.  </p>
          
      </div>
    
    <div className={styles.prize}>
    <Divider sx={{width:'100%', marginBottom:'20px'}}/>
           <h1 > Create your challenge  / Find Prizes by level</h1>
                      {/* <p> aqui podrás tener un ejemplo de premios que se obtienen por nivel. </p> */}

           <div className= {styles.divider} >
              <ArrayInput/>
           </div>
    </div >
    <Footer/>
    </div>
  );
}
