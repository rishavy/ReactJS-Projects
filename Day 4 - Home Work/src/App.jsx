import { useState } from 'react'
import Profile from './assets/components/Profile'
import Work from './assets/components/Work'
import Skill from './assets/components/Skill'
import Icon from './assets/components/Icon'



function App() {


  return (
    <div className='scale-100'>
      <Profile/>
      <Work/>
      <Skill/>
      <Icon/>
    </div>
  )
}

export default App