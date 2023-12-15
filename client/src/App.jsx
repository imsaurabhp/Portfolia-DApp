import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Socials from './components/socials/Socials'
import Curtain from './components/curtain/Curtain'

const App = () => {

  const [state, setState] = useState({
    web3: null,
    contract: null
  })

  const [isHidden, setIsHidden] = useState(true);

  const saveState = (state) =>{
    setState(state)
    setIsHidden(!isHidden)
  }

  return (
    <>
      <div>
      <Navbar saveState={saveState}/>
        {isHidden ? <Curtain /> : 
        <>
        <Profile />
        <Projects state={state}/>
        <Skills />
        <Experience state={state}/>
        <Socials />
        </>
        }
      </div>
    </>
  )
}

export default App