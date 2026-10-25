import { useState } from "react";

function Button({text,onclickhandler,style='primary', type='button'}){

    
function getbtnstyle(style){

   if(style=='primary')return 'bg-blue-500';
   else if(style=='secondary'){
    return 'bg-gray-500';
   } 
   else if(style=='error'){
    return 'bg-red-500';
   }
     else if(style=='success'){
    return 'bg-green-500';
   }
     else if(style=='warning'){
    return 'bg-yellow-500';
   }
}
    return(
        <div>
            <button onClick={onclickhandler} type={type} 
            className={`px-4 py-4 ${getbtnstyle(style)} text-white mt-2 rounded-md ml-2` }  >
                {text}
            </button>
        </div>
    )
}
export default Button;