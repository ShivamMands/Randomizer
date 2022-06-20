import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import { WheelComponent } from './wheelComponent'
// import './index.css'

const segments = [
  'Buy a nice cake now!',
  "Hit me a phone call， I'll sing happy birthday song to you!",
  "Go to get a stranger and take a photo, tell him/her it's your birthday",
  'Find the best restaurant in the airport and have a nice meal',
  'Let me buy you a amazon prime membership as gift',
  'Do all of the them on the list',
  'Others - You could improvise, tell me what you want, I could try to fulfill you',
]
const seg_colors = [
  '#F0CF50',
  '#815CD1',
  '#3DA5E0',
  '#34A24F',
  '#F9AA1F',
  '#FF9000',
  '#FF9000',
]

export default function WheelPicker() {
  const [showSpinner, setShowSpinner] = useState(false)
  const [hideMis, setHideMis] = useState(false)

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
        <div
          className="container"
          id="spin"
          style={{ textAlign: 'end', float: 'right', display: 'none' }}
        >
          {!hideMis && (
            <>
              {/* <h2>Decide how to celebrate now!</h2> */}
              <WheelComponent
                segments={segments}
                seg_colors={seg_colors}
                onFinished={(winner) => {
                  swal('Yeah', winner, 'success').then(() => setHideMis(false))
                }}
                primaryColor="#FFD700"
                contrastColor="white"
                buttonText="Pick!"
              />
            </>
          )}
        </div>
      )}
    </div>
  )
}
