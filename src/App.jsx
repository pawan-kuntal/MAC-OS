import React from 'react'
import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import GitHub from './components/windows/GitHub'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { resume } from 'react-dom/server'

const App = () => {

  const [windowsState, SetWindowsState] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false,
  })

  return (
    <main>
      <Nav/>
      <Dock windowsState={windowsState} setWindowsState={SetWindowsState}/>
      { windowsState.github && <GitHub windowName = 'github'  setWindowsState={SetWindowsState}/>}
      { windowsState.note && <Note windowName = 'note'  setWindowsState={SetWindowsState}/>}
      { windowsState.resume && <Resume windowName = 'resume'  setWindowsState={SetWindowsState}/>}
      { windowsState.spotify && <Spotify windowName = 'spotify'  setWindowsState={SetWindowsState}/>}
      { windowsState.cli && <Cli windowName = 'cli' setWindowsState={SetWindowsState}/>}
    </main>
  )
}

export default App