import { Link } from "react-router-dom";


function Startgame(){
   return(
      <>
    <h1>Start Game</h1>
   <Link to="/play" className="text-blue-400">Playgame</Link>
   </>
   ) 
}
export default Startgame;