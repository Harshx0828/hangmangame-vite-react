function Letterbtn({text,guessedletters,onletterclick}){
let stringbtn="QWERTYUIOPASDFGHJKLZXCVBNM".split('');
const originalletter=new Set(text.toUpperCase().split(''));
const guessedletterset=new Set(guessedletters);
const buttonstyle=function (letter){
  if(guessedletterset.has(letter)){
    return`${originalletter.has(letter)?'bg-green-500':'bg-red-500'}`;}
   else{
    return  'bg-blue-500'
  }  
}
const buttons=stringbtn.map(function(letter){
    return(
         <button
          key={`button-${letter}`} onClick={onletterclick} disabled={guessedletterset.has(letter)} className={`h-12 w-12 m-1 text-white rounded-md ${buttonstyle(letter)}`} >{letter}</button>)});
return(
    <>
    {buttons}</>
)  }        
export default  Letterbtn;