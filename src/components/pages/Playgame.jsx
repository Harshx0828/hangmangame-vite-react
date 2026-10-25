import { Link, useLocation } from "react-router-dom";
import Startgame from "./Startgame";
import Maskedtext from "../maskedtext/Maskedtext";
import Letterbtn from "../Letterbuttons/Letterbtn";
import { useState } from "react";
import Imagedisplay from "../Imagedisplay";
import { ToastContainer, toast } from 'react-toastify';
function Playgame(hint){
const location = useLocation();
const [arr,setarr]=useState([]);
const[step,setstep]=useState(0);
function onletterclick(event) {
    
    const letter = event.currentTarget.innerText;
    if(location.state.wordselected.toUpperCase().includes(letter)){
        console.log('Correct');
    }else {  let x=step+1; setstep(x);
        console.log(step);
    }
    setarr(prevArr => [...prevArr, letter]);
}
return(
    <>
    <div className="mb-4 text-lg font-semibold ml-4">playgame </div>
    <Maskedtext  text={location.state.wordselected} guessedletters={arr} />
    <br />
    <Letterbtn text={location.state.wordselected } guessedletters={arr} onletterclick={onletterclick}/>
    <div className="mt-5 text-base md:text-2xl" >
        <Imagedisplay step={step}/>
    <Link to='/start'  element={<Startgame/>}  className="text-blue-500 ml-5 ">Startgame link</Link>
    </div>
    
    </>
)
}
export default Playgame;