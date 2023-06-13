import React from 'react'
import Gamecard from './Gamecard'
import { useSelector } from 'react-redux'
import Addgame from './Addgame';

function Gameslist() {

const games=useSelector((state)=>state.game.gameslist);
console.log(games);
  return (
    <div>
 
 <div className='addgame'>   <Addgame/>  </div>

    <div className='container'>
   {games.map((el)=><Gamecard game={el} />)}
    </div>
 </div>

  )
}

export default Gameslist