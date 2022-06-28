import Timer from './Timer'
import Settings from './Settings'
import { useState } from 'react'
import SettingsContext from './SettingsContext'
import './index.css'

function PomodoroTimer() {
  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(2)
  const [breakMinutes, setBreakMinutes] = useState(0)

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  )
}

export default PomodoroTimer
