import React from 'react';

const LowCutFilterSlider = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="lowCutFilterSlider">Low Cut Filter:</label>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        id="lowCutFilterSlider"
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
      <span>{value}%</span>
    </div>
  );
};

export default LowCutFilterSlider;
