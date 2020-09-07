import React from 'react';

export const InputText = ({ value, handleChange, placeholder}) => <input required type='text' value={value} onChange={handleChange} placeholder={placeholder} />