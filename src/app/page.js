"use client";

import styles from "../app/page.module.css";
// import Navbar from "./components/Navbar";
import Button from '@mui/material/Button';
import ArrayInput from "./components/ArrayInput";
import React from "react"


export default function Home() {
  const prizes = ['Stickers', 'Stickers', 'Tshirt' , '$1']
  return (
    <main className={styles.main}>
      {/* <Navbar /> */}
      <div className={styles.description}>
        <h1 >Instrucciones</h1>
          <p> Aquí encontraras 3 ruletas con 
            "challenges" de skateboarding de 3 niveles :
            Básico (Basic) , Intermedio (Medium) , Difícil (Hard). 
          </p>
          <p> Cada participante escogerá el nivel y tiene <b>una</b> oportunidad para hacer dicho  reto. </p>
          <p>  Si es superado, pasa a la ruleta de "Prizes"  del nivel escogido. </p>
    </div>
    <div className={styles.prize}>
           <h1 >Challenge Prize</h1>
           <div className="">
              <ArrayInput/>
           </div>
    </div>
 
    </main>
  );
}
