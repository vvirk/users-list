import React from 'react';

export const InputText = ({ value, handleChange, placeholder}) => <input type='text' value={value} onChange={handleChange} placeholder={placeholder} />