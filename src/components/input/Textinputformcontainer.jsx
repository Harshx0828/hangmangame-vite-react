import { useNavigate } from "react-router-dom";
import Textinputform from "../Textinputform/Textinputform";
import { useState } from "react";

function Textinputformcontainer(){
const[text,settext]=useState('text');
const[btntext,setbtntext]=useState('hide');
const [word,setword]=useState("");
const nagivate=useNavigate();
function onsubmithandle(event){
    console.log("formsubmitted",word);
    event.preventDefault();
    if(word){
     nagivate('/play',{ state: { wordselected: word } });
    }
    
   }

function onchnagehandler(event){
setword(event.target.value);
console.log(word);
   }

 function onclickhandler(e){
 if(btntext=='hide'){
setbtntext('show');settext('password');
 }
 else{
setbtntext('hide');settext('show');
 }
 }
return <Textinputform  onsubmithandle={onsubmithandle} onchnagehandler={onchnagehandler}  text={btntext} inputype={text} onclickhandler={onclickhandler} />
    }

export  default Textinputformcontainer;