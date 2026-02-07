import Box from '@mui/material/Box';

import TextField from "@mui/material/TextField";
import "./FormDemo.css";
import { useState } from "react";
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Stack from '@mui/material/Stack';

export default function FormDemo() {

    const [name, setName] = useState("");
    const [volumeValue, setVolumeValue] = useState(0);

    // const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setVolumeValue(newValue);
    };

    function updateName(event){
        setName(event.target.value);
    }

  return (
    // <div className="FormDemo">

       <Box component="section" sx={{ p: 6, border: '1px solid red' }}>
      
        <h2>Volume: {volumeValue}</h2>
        <Stack direction="row" spacing={2}>
            <VolumeDown />
            <Slider aria-label="Volume" value={volumeValue} onChange={handleChange} />
            <VolumeUp />
        </Stack>
        
        <h2>The dog name is {name}</h2>
        <TextField
          style={{backgroundColor: "#ffffff44"}}
          id="outlined-basic"
          value={name}
          onChange={updateName}
          label="Dog Name"
          variant="outlined"
          placeholder="Fido"
          // color="secondary"
          focused
        />

      </Box>
    // </div>
  );
}
