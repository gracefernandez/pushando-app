"use client";

import styles from "../app/page.module.css";
// import BasicTrick from "../app/pages/BasicTrick";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.description}>
        <h1 >Instrucciones</h1>
          <p> Aqui encontraras 3 ruletas con 
            challenges de skateboarding de 3 niveles :
            Básico (Basic) , Intermedio (Medium) , Difícil (Hard). 
          </p>
          <p> Cada uno escogera el nivel y tiene una oportunidad para caer el reto. </p>
          <p>  Si es superado , pasa a la ruleta de "Prizes"  del nivel escogido </p>
    </div>
    <div className={styles.prize}>
           <h1 >Prizes</h1>
           <div className={styles.pbuttons}>
            
           </div>
    </div>
 
    </main>
  );
}
