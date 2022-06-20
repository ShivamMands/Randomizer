import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMember } from '../../redux/actions/members/membersActions'
import { makeStyles } from '@material-ui/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'

export default function DeleteModal({ data }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
    height: 200,
    bgcolor: '#022C43',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  const AddMemberHeader = {
    display: 'contents',
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
    marginTop: '5%',
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('id: ', data)
    dispatch(deleteMember(data._id))
    handleClose()
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        <DeleteIcon />
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
            Delete Member
          </Typography>
          <CloseIcon style={{ float: 'right', color: 'white' }} />
          <hr />
          <br />
          <h3>Are you sure you want to delete "{data.name}"</h3>
          <Button
            style={button}
            type="submit"
            onClick={handleFormSubmit}
            size="large"
          >
            Delete Member
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
