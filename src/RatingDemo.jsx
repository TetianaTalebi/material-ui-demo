import { useState } from 'react';

import Rating from '@mui/material/Rating';

export default function RatingDemo(){

    const [score, setScore] = useState(3)

    return (
        <div>
            <h2>Rating Demo</h2>
            <h3>Current Rating: {score}</h3>

            <Rating
            name="simple-controlled"
            precision={0.5}
            max={16}
            size="large"
            value={score}
            onChange={(event, newScore) => {
            setScore(newScore);
            }}
        />
        </div>
    );
    
}