import { useState } from 'react'
import './App.css'
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
    setWords(words);
    setStats({
      characterCount: value.length,
      wordCount,
      readingTime,
    });

  }


  return (
    <div className='text-3xl font-bold underline'>
      <StatsDisplay stats={stats}></StatsDisplay>
     <TextInput onTextChange={handleTextChange} />
    </div>
    
    
    
  )
}

export default App
