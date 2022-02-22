import React from 'react'
import ButtonRound from '../buttons/ButtonRound'

import {BsArrowLeft} from 'react-icons/bs'
import {BsImage} from 'react-icons/bs'

const OptionsBar = () => {
  return (
    <div className='container'>
      <div className='optionBar__container'>
        <ButtonRound moreClass='mr-2' action={'return'}>
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