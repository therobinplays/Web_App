import React from "react";

export default function Input ( { labelName, type, placeholder } ) {
    return (

        <div>

        <label className="block font-bold text-black-700 mb-1" htmlFor="fname">username</label>
        <input required placeholder={placeholder} className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-rose-400" type={type} id="username" name="username" />
        
        </div>
    );
    
}