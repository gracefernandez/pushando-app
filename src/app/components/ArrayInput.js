import React, { useState } from 'react';
import { TextField, Button, Chip , Stack, Typography } from '@mui/material';
import styles from "../page.module.css";
import BasicWheel from './BasicWheel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus} from '@fortawesome/free-solid-svg-icons';




const ArrayInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState([]);
 
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddValue = () => {
    if (inputValue.trim()) {
      setValues([...values, inputValue]);
      setInputValue('');
    }
  };
  const resultArray = values.map(option => ({
    option: option,
    style: { textColor: "black" }
  }));

  const handleDelete = (index) => {
    setValues((prevValues) => prevValues.filter((_, i) => i !== index));
  };  
  
  const handleDeleteAll = () => {
    setValues([]);
   };

  return (
    <div>
      <div >
        <button className= {styles.pbutton} style={{color:"green", border:'none', margin:'1rem'}} onClick={() => setValues(["T-shirt", "Sticker", "$1"])}>Basic Prize</button> 
        <button className={styles.pbutton} style={{border:'none', margin:'1rem'}} onClick={() => setValues(["T-shirt", "Sticker", "$5", "StickerPack", "Bandana"])}>Medium Prize</button>
        <button className={styles.pbutton} style={{color:"red", border:'none', margin:'1rem'}} onClick={() => setValues(["T-shirt", "Sticker", "$10", "StickerPack", "Deck", "Medias"])}>Hard Prize</button>
      </div>    
      {values.length > 0 ? (
  <BasicWheel data={resultArray} />
) : (
  <Typography variant="h5" color="error" fontFamily= "IBM Plex Mono" marginTop={5}>
    No data available
  </Typography>
)}
      <div className={styles.addPrize}>
        <TextField
          id="outlined-basic"
          label="Add Prize or Challenge" 
          variant="outlined" 
          color="success" 
          value={inputValue}
          onChange={handleInputChange}
          style={{ marginBottom: '20px', marginRight: '10px', backgroundColor: "whitesmoke" }}
        />
        <div className={styles.twobttn}>
        <Button style={{ margin: "10px"}}variant="outlined" color="success" endIcon={<FontAwesomeIcon icon={faCirclePlus} />} onClick={handleAddValue}>
          One  
        </Button>
        <Button variant="outlined" color="error" endIcon={<FontAwesomeIcon icon={faCircleMinus} />} onClick={handleDeleteAll}>
          All 
        </Button>
        </div>
       
      </div>
 <div className={styles.listOfchip}>
          {values.map((value, index) => (
            <Stack className={styles.chip} key={index} direction="row">
              <Chip style={{ color: "green", backgroundColor:'rgb(240, 237, 239)'}} variant='outlined' label={value} onDelete = {()=>handleDelete(index)} />
            </Stack>
          ))}
        </div>
    </div>
  );
};

export default ArrayInput;
