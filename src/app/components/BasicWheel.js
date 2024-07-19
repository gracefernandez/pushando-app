// BasicWheel.js
"use client";

import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import styles from "../components/wheel.module.css";
import Button from '@mui/material/Button';



const BasicWheel = ({data}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState(null);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setSelectedPrize(null);
      setMustSpin(true);
      
    }
  };

  return (
    <div className={styles.container}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor = "#222222"
        backgroundColors={['#FFFFFF', '#df3428','#F0CF50', '#FFC0CB','#815CD1', '#00FFFF','#F9AA1F','#90EE90' ]}
        textColors='black'
        onStopSpinning={() => {
            setMustSpin(false);
            setSelectedPrize(data[prizeNumber].option);
          }}      />
     <Button style={{backgroundColor:"#e24b2b",}}variant="contained" onClick={handleSpinClick}>SPIN</Button>
      <div style={{marginTop:"30px", textAlign:"center"}}>
      {selectedPrize !== null && (
        <div>
          <h2>Selected : {selectedPrize}</h2>
        </div>
      )}
      </div>
    </div>
  );
};

export default BasicWheel;
