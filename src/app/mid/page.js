"use client";

import styles from "../basic/basic.module.css";
import BasicWheel from "../components/BasicWheel";

export default function BasicTrick() {
    const data = [
        { option: 'Grinds', style: { backgroundColor: '#EE4040', textColor: 'black' } },
        { option: 'Slide', style: { backgroundColor: '#F0CF50' , textColor: 'black' } },
        { option: '2 Tricks B2B' , style: { backgroundColor: '#FFC0CB' , textColor: 'black' } },
        { option: 'Fakie', style: { backgroundColor: '#815CD1', textColor: 'black'  } },
        { option: '180 in ', style: { backgroundColor: '#00FFFF', textColor: 'black' } },
        { option: '180 out', style: { backgroundColor: '#F9AA1F', textColor: 'black'  } },
        { option: 'Big spin', style: { backgroundColor: '#90EE90', textColor: 'black'  } },
      ];
  return (
    <main >
      <div className= {styles.container}>
        <div className={styles.top}>
        <h1>Wheel of Mid Tricks</h1>
            </div>
        <p>
          A simple wheel of   skateboarding tricks. Click the spin
          button to spin the wheel and see what Trick you must to land. <br/> ♢ Try it!
          Only for fun and practice. ♢
        </p>
      
    </div > 
         <div style={{textAlign:"center"}}>
             <BasicWheel data={data}/>
        </div>  
    </main>
  );
}
