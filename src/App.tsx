import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter'
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay'
import { TextInput } from './components/TextInput/TextInput'
import { TextStats } from './types'





function App() {
  const [words, setWords] = useState("")
  const [stats, setStats] = useState<TextStats>({
    characterCount:0,
    wordCount:0,
    readingTime: 0
  })

  function handleTextChange(value: string) {
    const wordCount = 
    value.trim() === "" ? 0 : value.trim().split(/\s+/).length;
    const readingTime = (wordCount / 200) * 60; // 200 wpm
    setWords(value);
    setStats({
      characterCount: value.length,
      wordCount,
      readingTime,
    });

  }


  return (
    <div className=''>
      <StatsDisplay stats={stats}></StatsDisplay>
     <TextInput onTextChange={handleTextChange} />
    </div>
    
    
    
  )
}

export default App
