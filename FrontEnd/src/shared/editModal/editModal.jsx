import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { updateMember } from '../../redux/actions/members/membersActions'
import { makeStyles } from '@material-ui/styles'
import EditIcon from '@mui/icons-material/Edit'

export default function EditModal({ data }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [favouriteTech, setFavouriteTech] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    setName(data.name)
    setEmail(data.email)
    setFavouriteTech(data.favouriteTech)
  }, [data])

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

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const member = {
      id: data._id,
      name: name,
      email: email,
      favouriteTech: favouriteTech,
    }
    console.log('header: ', member)
    dispatch(updateMember(member))
    handleClose()
  }
  console.log('name: ', name, ',email: ', email, ',fvTech:', favouriteTech)
  return (
    <div>
      <EditIcon onClick={handleOpen} />
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
            Update Member
          </Typography>
          {/* <CloseIcon style={{ float: 'right', color: 'white' }} /> */}

          <hr />
          <br />
          <form action="" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              defaultValue={data.name}
              placeholder="Name"
              style={textfield}
              className="input"
              color="white"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="email"
              defaultValue={data.email}
              placeholder="Email"
              style={textfield}
              className="input"
              color="white"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="tech"
              type="text"
              defaultValue={data.favouriteTech}
              placeholder="Favourite Tech"
              style={textfield}
              className="input"
              color="white"
              onChange={(e) => setFavouriteTech(e.target.value)}
            />
            <Button style={button} type="submit" size="large">
              Update Member
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
