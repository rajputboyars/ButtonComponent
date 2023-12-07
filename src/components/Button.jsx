import React from 'react'

function Button(
    {
        children,
        type = "default",
        onclick
    }
) {
  if (type == "primary") {
    return (
            <button className="bg-blue-500 rounded-lg px-6 py-1 text-white hover:bg-blue-400 transition duration-300 active:shadow-[0_0_10px_-2px_skyblue]" onClick={onclick}>
              {children}
            </button>
    )    
  } else if (type == "text") {
    return(
            <button className="rounded-lg px-6 py-1 text-gray-600 hover:bg-slate-100 transition duration-300 active:bg-slate-300" onClick={onclick}>
              {children}
            </button> 
    )
  } else if (type == "link") {
    return(
            <button className="rounded-lg px-6 py-1 text-blue-600 hover:text-blue-400 transition duration-300 active:text-blue-800" onClick={onclick}>
              {children}
            </button> 
    )
  } else if (type == "dashed") {
    return(
            <button className="border-[1px] border-dashed border-gray-300 rounded-lg px-6 py-1 text-gray-600 hover:text-blue-500 hover:border-blue-500 transition duration-300 active:shadow-[0_0_10px_-2px_skyblue]" onClick={onclick} >
              {children}
             </button> 
    )
  } else if(type == "default") {
    return(
           <button className="border-[1px] border-gray-300 rounded-lg px-6 py-1 text-gray-600 hover:text-blue-500 hover:border-blue-500 transition duration-300 active:shadow-[0_0_10px_-2px_skyblue]" onClick={onclick}>
             {children}
           </button> 
           )
 }
}

export default Button