// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { makeStyles } from '@material-ui/core'
// import { useDispatch, useSelector } from 'react-redux'
// import { Button } from '@mui/material'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import Modal from '@mui/material/Modal'
// import CloseIcon from '@mui/icons-material/Close'
// import DoneIcon from '@mui/icons-material/Done'
// import TextField from '@mui/material/TextField'

// export default function AddModal() {
//   const [open, setOpen] = React.useState(false)
//   const handleOpen = () => setOpen(true)
//   const handleClose = () => setOpen(false)

//   const [addFormData, setAddFormData] = useState({})

//   const handleAddFormChange = (event) => {
//     // event.preventDefault()
//     // const fieldName = event.target.getAttribute('name')
//     // const fieldValue = event.target.value
//     // const newFormData = { ...addFormData }
//     // newFormData[fieldName] = fieldValue
//     // setAddFormData(newFormData)
//   }

//   const handleAddFormSubmit = (event) => {
//     // event.preventDefault()
//     // const headervalue = {
//     //   name: addFormData.name,
//     //   email: addFormData.email,
//     //   tech: addFormData.tech,
//     // }
//     // // dispatch(addAffiliate(headervalue))
//     // handleClose()
//   }
//   const useStyles = makeStyles({
//     styleAdd: {
//       padding: '18px 0px!important',
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       width: 500,
//       backgroundColor: 'white',
//       borderRadius: '5px',
//     },
//     headStyleAdd: {
//       paddingLeft: '25px',
//       display: 'inline',
//       width: '5em',
//     },
//     cancelButtonAdd: {
//       float: 'right',
//       color: '#003058!important',
//     },
//     textFieldAdd: {
//       width: '90%',
//       marginLeft: '1vw!important',
//     },
//     passwordinput: {
//       marginTop: '1em',
//       marginBottom: '1em',
//       width: '23em',
//       marginRight: '0.3em',
//       marginLeft: '1.2em',
//     },
//     styleBtnAdd: {
//       float: 'right',
//     },
//     styleBtnColor: {
//       backgroundColor: '#003058!important',
//       marginLeft: '1vw!important',
//     },
//     btnCancelAdd: {
//       marginLeft: '.8vw!important',
//       marginRight: '1.2vw!important',
//     },
//     passCopyBtn: {
//       backgroundColor: '#003058 !important',
//     },
//     createPasswordDiv: {
//       display: 'flex',
//       alignItems: 'baseline',
//       justifyContent: 'center',
//       flexDirection: 'column',
//     },
//     multiSelect: {
//       marginLeft: '2.5vh !important',
//     },
//     addAffiliateBtn: {
//       backgroundColor: '#003058 !important',
//       float: 'right',
//     },
//   })
//   const classes = useStyles()

//   /////////////////////////////////// GENERATE PASSWORD END /////////////////////////////////////

//   return (
//     <>
//       <div>
//         <Button
//           onClick={handleOpen}
//           variant="contained"
//           className={classes.addAffiliateBtn}
//         >
//           Add Affiliates
//         </Button>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box className={classes.styleAdd}>
//             <Typography variant="h4" className={classes.headStyleAdd}>
//               Add
//             </Typography>
//             <Button onClick={handleClose} className={classes.cancelButtonAdd}>
//               <CloseIcon />
//             </Button>
//             <hr />
//             <form action="" onSubmit={handleAddFormSubmit}>
//               <TextField
//                 helperText=" "
//                 id="demo-helper-text-aligned-no-helper"
//                 label="Name"
//                 name="name"
//                 required={true}
//                 placeholder="Username"
//                 className={classes.textFieldAdd}
//                 onChange={(e) => handleAddFormChange(e)}
//               />
//               <TextField
//                 helperText=" "
//                 id="demo-helper-text-aligned-no-helper"
//                 label="Email"
//                 name="email"
//                 required={true}
//                 placeholder="Email"
//                 className={classes.textFieldAdd}
//                 onChange={(e) => handleAddFormChange(e)}
//               />
//               <TextField
//                 helperText=" "
//                 id="demo-helper-text-aligned-no-helper"
//                 label="Favourite Tech"
//                 name="tech"
//                 required={true}
//                 placeholder="Email"
//                 className={classes.textFieldAdd}
//                 onChange={(e) => handleAddFormChange(e)}
//               />
//               <hr />

//               <div className={classes.styleBtnAdd}>
//                 <Button
//                   type="submit"
//                   className={classes.styleBtnColor}
//                   variant="contained"
//                 >
//                   Save
//                 </Button>

//                 <Button
//                   onClick={handleClose}
//                   className={classes.btnCancelAdd}
//                   variant="outlined"
//                 >
//                   Cancel
//                 </Button>
//               </div>
//             </form>
//           </Box>
//         </Modal>
//       </div>
//     </>
//   )
// }
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'
import { useState } from 'react'
import './AddModal.css'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,
  bgcolor: '#022C43',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const AddMemberHeader = {
  display: 'contents',
}

const textfield = {
  width: '90%',
  fontWeight: '400',
  background: 'rgb(2, 44, 67)',
  padding: '4px 10px',
  color: '#FBFCF8',
  fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
  height: '3ch',
  fontSize: '18px',
  letterSpacing: '.2px',
  marginBottom: '4%',
  border: '2px solid #FED600',
}
const button = {
  background: '#ffd700',
  padding: '4px 10px',
  fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
  fontWeight: '700',
  color: '#022C43',
  float: 'right',
  fontSize: '18px',
  marginRight: '5.3%',
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [formData, setFormData] = useState({})

  const handleFormChange = (event) => {
    event.preventDefault()
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value
    const newFormData = { ...formData }
    newFormData[fieldName] = fieldValue
    setFormData(newFormData)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const headervalue = {
      name: formData.name,
      email: formData.email,
      tech: formData.tech,
    }
    console.log('header: ', headervalue)
    // dispatch(addAffiliate(headervalue))
    handleClose()
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        sx={{ backgroud: '#0C0C0C' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="h2"
            style={AddMemberHeader}
          >
            Add Member
          </Typography>
          <CloseIcon style={{ float: 'right', color: 'white' }} />

          <hr />
          <br />
          <form action="" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name1"
              style={textfield}
              className="input"
              color="white"
              onChange={(e) => handleFormChange(e)}
            />
            <input
              type="text"
              name="email"
              placeholder="Name2"
              style={textfield}
              className="input"
              color="white"
              onChange={(e) => handleFormChange(e)}
            />
            <input
              name="tech"
              type="text"
              placeholder="Name3"
              style={textfield}
              className="input"
              color="white"
              onChange={(e) => handleFormChange(e)}
            />
            <Button style={button} type="submit" size="large">
              Add member
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
