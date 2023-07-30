import React from 'react'

const Searchbar = ({
    type, 
    placeholder, 
    required = false, 
    value, 
    name, 
    handleInputChange, 
    rightIcon}) => {
  return (
    <div>
        <div className='relative'>
            <input 
                type={type || 'text'}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
                required={required}
                className='bg-black border-slate-700 text-gray-300 text-md rounded-md w-full p-2.5 outline-none px-5 focus:ring-1 focus:ring-slate-700 focus:border-slate-800 place-holder:text-sm shadow-xl'
             />
        </div>
    </div>
  )
}

export default Searchbar