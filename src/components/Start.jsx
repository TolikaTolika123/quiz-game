import React, { useContext } from 'react'
import { GameContext } from '../context'

const Start = () => {
  const {setGameStatus} = useContext(GameContext)
  return (
    <div className='start__menu'>
      <h1 className='start__title'>Welcome to JavaScript quiz game</h1>
      <p className='start__desc'>
        You will be asked five questions with possible answers, at the end you
        will know how much you answered correctly
      </p>
      <button className='start__btn' type="button" onClick={() => setGameStatus('progress')}>Start game!</button>
    </div>
  )
}

export default Start