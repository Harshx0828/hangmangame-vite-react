import { getallcharacters } from "./Maskingutility";
import { ToastContainer, toast } from 'react-toastify';
function Maskedtext({text,guessedletters}){
   const maskedstring=getallcharacters(text,guessedletters) ;
   console.log(maskedstring);
   let x=maskedstring.join('');
   if(x==text.toUpperCase()){
    toast('YOU WIN ');
   }
return(
    <>
       <ToastContainer/>
    {maskedstring.map((letter,index)=>{
        return(
        <>
            <span key={index} className="mx-1">
              {letter}
            </span>
            </>
        )
    })}
    
    
    </> 
)
}
export default Maskedtext