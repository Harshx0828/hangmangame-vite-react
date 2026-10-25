import './App.css'

import Textinputformcontainer from './components/input/Textinputformcontainer';
import { Routes, Route } from 'react-router-dom';
import Startgame from './components/pages/Startgame';
import Playgame from './components/pages/Playgame';
import Homepage from './components/pages/Homepage';

function App() {

  return (
    <div>
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/play' element={<Playgame/>}/>
  <Route path='/start' element={<Textinputformcontainer/>}/>
</Routes>
   
    </div>

  )
}
export default App
