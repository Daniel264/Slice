import React, { useState } from "react";
// import styles from 'styled-components';

const RangeSlider:React.FC = () => {

    const [value, setValue] = useState<number>(50);

     const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
     }

    return (
        <div className="range-container">
            {/* <label htmlFor="range">${value}</label> */}
            <input type="number" value={value} onChange={handleChange}/>
            <input type="range" min={0} max={100} value={value} onChange={handleChange} className="range-slider rating" />

        </div>
    );
};

export default RangeSlider;
