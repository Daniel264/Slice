import React, { useState } from "react";

const RangeSlider = () => {

    const [value, setValue] = useState(0);

    function onchange(e:any) {
        setValue(value + 1)
    }

    function onMoveBack(e: any) {
        setValue(value - 1);
    }
    return (
        <div className="range-container">
            <label htmlFor="range">${value}</label>
            <input type="range" onProgress={onMoveBack} onPointerUp={onMoveBack} onChange={onchange || onMoveBack} className="range-slider" />
        </div>
    );
};

export default RangeSlider;
