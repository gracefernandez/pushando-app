"use client";

import styles from "../basic/basic.module.css";
import BasicWheel from "../components/BasicWheel";

export default function BasicTrick() {
    const data = [
        { option: 'Do a Trick', style: { backgroundColor: '#EE4040', textColor: 'black' } },
        { option: 'Boneless', style: { backgroundColor: '#F0CF50' , textColor: 'black' } },
        { option: 'Truco Estatico' , style: { backgroundColor: '#FFC0CB' , textColor: 'black' } },
        { option: 'Shuv it', style: { backgroundColor: '#815CD1', textColor: 'black'  } },
        { option: 'Ollie sobre..?', style: { backgroundColor: '#00FFFF', textColor: 'black' } },
        { option: 'Rock', style: { backgroundColor: '#F9AA1F', textColor: 'black'  } },
        { option: 'Manual 5s', style: { backgroundColor: '#90EE90', textColor: 'black'  } },
      ];
  return (
    <main >
      <div className= {styles.container}>
        <div className={styles.top}>
        <h1>Wheel of Basic Tricks</h1>
            </div>
        <p>
          A simple wheel of basic skateboarding tricks. Click the spin
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
