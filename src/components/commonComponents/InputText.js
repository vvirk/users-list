import React from 'react';

export const InputText = ({ value, handleChange, placeholder}) => <input className='inputText' required type='text' value={value} onChange={handleChange} placeholder={placeholder} />