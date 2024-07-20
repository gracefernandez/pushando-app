"use client";

import styles from "../basic/basic.module.css";
import BasicWheel from "../components/BasicWheel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BasicTrick() {
    const data = [
        { option: 'Line 3 Tricks', style: { backgroundColor: '#EE4040', textColor: 'black' } },
        { option: 'Do it Nollie', style: { backgroundColor: '#F0CF50' , textColor: 'black' } },
        { option: 'Treflip' , style: { backgroundColor: '#FFC0CB' , textColor: 'black' } },
        { option: 'Do it Switch ', style: { backgroundColor: '#815CD1', textColor: 'black'  } },
        { option: 'Flip in ', style: { backgroundColor: '#00FFFF', textColor: 'black' } },
        { option: 'Flip Out', style: { backgroundColor: '#F9AA1F', textColor: 'black'  } },
        { option: 'Lipslide', style: { backgroundColor: '#90EE90', textColor: 'black'  } },
      ];
  return (
    <main >
      <Navbar/>
      <div className= {styles.container}>
        <div className={styles.top}>
        <h1>Wheel of Hard Tricks</h1>
            </div>
        <p>
          A simple wheel of hard skateboarding tricks. Click the spin
          button to spin the wheel and see what Trick you must to land. <br/> ♢ Try it!
          Only for fun and practice. ♢
        </p>
      
    </div > 
         <div style={{textAlign:"center"}}>
             <BasicWheel data={data}/>
        </div>  
        <Footer/>
    </main>
  );
}
