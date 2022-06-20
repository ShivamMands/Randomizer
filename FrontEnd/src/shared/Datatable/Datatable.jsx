import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { makeStyles } from '@material-ui/styles'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch, useSelector } from 'react-redux'
import EditModal from '../editModal/editModal'
import { getMembers, addMember, updateMember, deleteMember } from '../../redux'
import { Button } from '@mui/material'
import DeleteModal from '../deleteModal/DeleteModal'
import './Datatable.css'

export default function DataTable() {
  const [deleteModal, setDeleteModal] = useState(false)
  const [tableData, setTableData] = useState([])
  const [currentRow, setCurrentRow] = useState({})

  const width = window.screen.width
  const members = useSelector((state) => state.members.response)
  const dispatch = useDispatch()

  let rowAbc = {}
  const useStyles = makeStyles({
    downloadBtn: {
      color: 'black !important',
      marginRight: '2em !important',
    },
    ul: {
      '& .MuiPaginationItem-root': {
        color: '#fff',
      },
    },
    DeleteBtn: {
      background: 'black !important',
    },
  })

  useEffect(() => {
    dispatch(getMembers())
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: width <= 1366 ? 200 : 300 },
    { field: 'email', headerName: 'Email', width: width <= 1366 ? 200 : 300 },
    {
      field: 'favouriteTech',
      headerName: 'favouriteTech',
      width: width <= 1366 ? 200 : 300,
    },

    {
      field: 'action',
      headerName: 'Action',
      headerClassName: 'statements-header',
      description: 'This column has a value getter and is not sortable.',
      width: width <= 1366 ? 200 : 300,
      disableColumnMenu: true,
      renderCell: (params) => {
        // if (deleteModal) {
        //   const thisRow = {}
        //   params.api.getAllColumns().forEach((c) => {
        //     thisRow[c.field] = params.getValue(params.id, c.field)
        //   })
        //   rowAbc = thisRow
        // }
        // const onClick = (type) => {
        //   const thisRow = {}
        //   params.api.getAllColumns().forEach((c) => {
        //     thisRow[c.field] = params.getValue(params.id, c.field)
        //   })
        //   setCurrentRow(thisRow)
        // }

        return (
          <>
            <Button>
              <EditModal data={currentRow} />
            </Button>
            <Button>
              <DeleteModal data={currentRow} />
            </Button>
          </>
        )
      },
    },
  ]

  const columnVisibilityModel = {
    id: false,
  }

  useEffect(() => {
    dispatch(getMembers())
  }, [])

  console.log('curent row: ', currentRow)

  return (
    <div
      style={{
        height: 500,
        width: '100%',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      {members && members.length > 0 ? (
        <DataGrid
          sx={{ color: 'white', width: '90%' }}
          columnVisibilityModel={columnVisibilityModel}
          getRowId={(members) => members._id}
          rows={members}
          columns={columns}
          pageSize={7}
          pagination
          rowsPerPageOptions={[7]}
          onCellClick={(param, event) => {
            if (!event.ctrlKey) {
              event.defaultMuiPrevented = true
              setCurrentRow(param.row)
            }
          }}
        />
      ) : (
        ''
      )}
    </div>
  )
}
