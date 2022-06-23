import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import { WheelComponent } from './wheelComponent'
import { useSelector, useDispatch } from 'react-redux'
import { confetti, setScrumMaster } from '../../redux'
import ColorGenerator from 'random-color-array-generator/ColorGenerator.min.js'
import store from '../../redux/store/store'

export default function WheelPicker() {
  const [showSpinner, setShowSpinner] = useState(false)
  const [hideMis, setHideMis] = useState(false)
  const [presenting, setPresenting] = useState(true)

  const dispatch = useDispatch()

  const teamA = useSelector((store) => store.teams.teamA)
  const teamB = useSelector((store) => store.teams.teamB)
  const segments = presenting ? teamB : teamA
  const showWheel = useSelector((store) => store.wheelPicker.show)

  useEffect(() => {
    if (teamA[0].teamroles === 'Presenting') {
      setPresenting(true)
    } else {
      setPresenting(false)
    }
  }, [])

  const colors = new ColorGenerator(segments.length)

  const seg_colors = colors.generateHEX()

  console.log('wheel picker')

  useEffect(() => {
    const second = 1000
    let countDown = new Date('Sep 17, 2020 00:00:00').getTime()
    let x = setInterval(() => {
      let now = new Date().getTime(),
        distance = countDown - now

      if (distance < 0) {
        clearInterval(x)
        setShowSpinner(true)
      }
    }, second)
    return () => clearInterval(x)
  }, [])
  return (
    <div className="App">
      {showSpinner && (
        <div className="container-wheel" id="spin">
          {!hideMis && (
            <>
              {/* <h2>Decide how to celebrate now!</h2> */}
              {segments && segments.length > 0 && showWheel ? (
                <WheelComponent
                  segments={segments}
                  seg_colors={seg_colors}
                  onFinished={(winner) => {
                    dispatch(setScrumMaster(winner))
                    swal('New Scrum Master', winner.name, 'success')
                      .then(() => setHideMis(false))
                      .then(function () {
                        dispatch(confetti(false))
                      })
                  }}
                  primaryColor="#FFD700"
                  contrastColor="white"
                  buttonText="Pick!"
                />
              ) : (
                ''
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
