import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'
import { useState } from 'react'
import './AddModal.css'
import { useDispatch, useSelector } from 'react-redux'
import { addMember } from '../../redux/actions/members/membersActions'
import { makeStyles } from '@material-ui/styles'
import CloseIcon from '@mui/icons-material/Close'

export default function AddModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [formData, setFormData] = useState({})

  const dispatch = useDispatch()

  const useStyles = makeStyles({
    button: {
      background: '#FBD401 !important',
      color: '#022C43 !important',
      fontSize: '14px !important',
      fontWeight: '700 !important',
      '&:hover': {
        color: 'white',
        // background:
      },
    },
  })

  const classes = useStyles()

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 300,
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
    const member = {
      name: formData.name,
      email: formData.email,
      favouriteTech: formData.tech,
    }
    console.log('header: ', member)
    dispatch(addMember(member))
    handleClose()
  }

  return (
    <div>
      <Button
        className={classes.button}
        onClick={handleOpen}
        variant="contained"
        size="large"
      >
        Create Member
      </Button>
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
          <CloseIcon
            onClick={handleClose}
            style={{ float: 'right', color: 'white', cursor: 'pointer' }}
          />

          <hr />
          <br />
          <form action="" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              style={textfield}
              className="input"
              color="white"
              onChange={(e) => handleFormChange(e)}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              style={textfield}
              className="input"
              color="white"
              onChange={(e) => handleFormChange(e)}
            />
            <input
              name="tech"
              type="text"
              placeholder="Favourite Tech"
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
