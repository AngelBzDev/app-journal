import React from 'react'
import ButtonRound from '../buttons/ButtonRound'

import {BsArrowLeft} from 'react-icons/bs'
import {BsImage} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const OptionsBar = () => {

  const navigate = useNavigate()

  return (
    <div className='container'>
      <div className='optionBar__container'>
        <ButtonRound moreClass='mr-2' onClick={() => navigate('/')}>
          <BsArrowLeft size={'2rem'}/>
        </ButtonRound>
        <ButtonRound moreClass='mr-2'>
          <BsImage size={'2rem'}/>
        </ButtonRound>
        <p className='date'>09/02/2022</p>
      </div>
    </div>
  )
}

export default OptionsBar