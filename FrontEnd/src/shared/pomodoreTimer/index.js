import Timer from './Timer'
import Settings from './Settings'
import { useState } from 'react'
import SettingsContext from './SettingsContext'
import { useSelector } from 'react-redux'
import './index.css'

function PomodoroTimer() {
  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(2)
  const [breakMinutes, setBreakMinutes] = useState(0)

  const activeMember = useSelector((store) => store.timer.activeMember)

  return (
    <main>
      <h4 style={{ textAlign: 'center' }}>
        {/* Currently Speaking:{' '} */}
        <i style={{ color: '#FED600', fontSize: '30px' }}>{activeMember}</i>
      </h4>
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
