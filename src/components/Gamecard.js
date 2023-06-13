import React from 'react'
import { deletegame } from '../redux/gameslice'
import { useDispatch } from 'react-redux'
import Editgame from './Editgame'

function Gamecard({game}) {
    const dispach=useDispatch()
  return (
    <div className='card'>
      <img src={game.img} /> 
      <h3> {game.name} </h3>

      <p> {game.description} </p>
      <button style={{backgroundColor:'red', color:'white'}} onClick={()=>dispach(deletegame({id:game.id} ))} > x </button>
            
    <Editgame game={game} />
    </div>
  )
}

export default Gamecard