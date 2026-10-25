export function getallcharacters(originalword,guessedletters){
guessedletters=guessedletters.map(function(ele){
   return  ele.toUpperCase()});
  const guessedletterset=new Set(guessedletters);
  const flag=false; 
 const result=originalword.toUpperCase().split('').map(function(char){
    if(guessedletterset.has(char)){
        return char;  
    }
else{
    return '_';
}
 });


return result;
}
