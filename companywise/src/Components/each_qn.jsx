import React from 'react'
import '../Style/each_qn.css'
import easy from '../assets/bush.png' 
import med from '../assets/tree.png'
import tough from '../assets/forest.png'

const each_qn = (props) => {

var bb = 'eachqn'
if((props.sno)%2 ===1)
{
   bb ='eachqn2'
  
}

 var difficulty =easy
if(props.level ==='med')
{
    difficulty= med
}else if(props.level==='hard')
{
  difficulty = tough
}


  
  return (
    // <div>

      <div className= {bb} id='eachqn'>
        
        <div className='sno'>
          {props.sno}
        </div>
        <div className='content'>
          {props.qn}
        </div>

        <div className='rating'>
          <img src={difficulty} alt=""  className='image'/>
        </div>
      </div>

    // </div>
  )

}

export default each_qn