import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Chip , Stack, Typography } from '@mui/material';
import styles from "../page.module.css";
import BasicWheel from './BasicWheel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble , faPlus , faCirclePlus, faBan, faCircleMinus} from '@fortawesome/free-solid-svg-icons';




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
//   console.log(resultArray);
    // Log values to the console whenever they change
  useEffect(() => {
    console.log('Values:', values);


  }, [values]);

  const handleDelete = (index) => {
    console.log("index " + index);
    if(values.length == 1){
    setValues(['']);
    }
    else {
    setValues((prevValues) => prevValues.filter((_, i) => i !== index));
    }

  };  
  
  const handleDeleteAll = () => {
    setValues([]);
   };

  return (
    <div>
      <div className={styles.pbuttons}>
        <Button style={{color:"green"}} onClick={() => setValues(["T-shirt", "Sticker", "$1"])}>Basic Prize</Button>
        <Button style={{color:"white"}} onClick={() => setValues(["T-shirt", "Sticker", "$5", "StickerPack", "Bandana"])}>Medium Prize</Button>
        <Button style={{color:"red"}} onClick={() => setValues(["T-shirt", "Sticker", "$10", "StickerPack", "Deck", "Medias"])}>Hard Prize</Button>
      </div>    
      {values.length > 0 ? (
  <BasicWheel data={resultArray} />
) : (
  <Typography variant="h5" color="error" fontFamily= "IBM Plex Mono">
    No data available
  </Typography>
)}
      <div className={styles.addPrize}>
        <TextField
          id="outlined-basic"
          label="Add Prize" variant="outlined" color="success" focused
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
        <List >
          {values.map((value, index) => (
            <Stack className={styles.chip} key={index} direction="row">
              <Chip style={{ color: "green"}} variant='outlined' label={value} onDelete = {()=>handleDelete(index)} />
            </Stack>
          ))}
        </List>
      </div>

    </div>
  );
};

export default ArrayInput;
