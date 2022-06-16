import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import DownloadIcon from "@mui/icons-material/Download";
import "./StatementsDataGrid.css";
import DeleteStatementModal from "../../Modal/DeleteStatement/DeleteStatementModal";

export default function DataGridMui({ data }) {
  const width = window.screen.width;
  const [pageSize, setPageSize] = useState(width <= 1366 ? 5 : 10);
  const [deleteModal, setDeleteModal] = useState(false);

  const columnVisibilityModel = {
    Id: false,
    DocumentFileId: false,
  };

  const isAdmin = useSelector((state) => state.user.user.IsAdmin);

  let rowAbc = {};
  const useStyles = makeStyles({
    downloadBtn: {
      color: "black !important",
      marginRight: "2em !important",
    },
    DeleteBtn: {
      background: "black !important",
    },
  });

  const classes = useStyles();

  const columns = [
    {
      field: "Id",
      headerName: "Id",
      width: width <= 1366 ? 0 : 0,
      headerClassName: "statements-header",
    },
    {
      field: "DocumentFileId",
      headerName: "DocumentFileId",
      width: width <= 1366 ? 0 : 0,
      headerClassName: "statements-header",
    },
    {
      field: "AffiliateName",
      headerName: "Affiliate Name",
      width: width <= 1366 ? 250 : 400,
      headerClassName: "statements-header",
    },
    {
      field: "FileName",
      headerName: "File Name",
      width: width <= 1366 ? 350 : 500,
      headerClassName: "statements-header",
    },
    {
      field: "Year",
      headerName: "Year",
      width: width <= 1366 ? 230 : 320,
      headerClassName: "statements-header",
    },
    {
      field: "Month",
      headerName: "Month",
      width: width <= 1366 ? 230 : 320,
      headerClassName: "statements-header",
    },
    {
      field: "action",
      headerName: "Action",
      headerClassName: "statements-header",
      description: "This column has a value getter and is not sortable.",
      width: width <= 1366 ? 230 : 320,
      disableColumnMenu: true,
      renderCell: (params) => {
        if (deleteModal) {
          const thisRow = {};
          params.api.getAllColumns().forEach((c) => {
            thisRow[c.field] = params.getValue(params.id, c.field);
          });
          rowAbc = thisRow;
        }
        const onClick = (type) => {
          const thisRow = {};
          params.api.getAllColumns().forEach((c) => {
            thisRow[c.field] = params.getValue(params.id, c.field);
          });
          const id = thisRow.DocumentFileId.split("?id=")[1].split("'>")[0];
          window.location.href = `${process.env.REACT_APP_BACKEND}api/Statements/DownloadDocAsync?id=${id}`;
        };

        return (
          <>
            <Button
              className={classes.downloadBtn}
              onClick={() => onClick("download")}
            >
              <DownloadIcon />
            </Button>
            {isAdmin ? (
              <DeleteStatementModal
                row={rowAbc}
                setDeleteModal={setDeleteModal}
              />
            ) : (
              ""
            )}
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: pageSize === 5 ? 400 : 655, width: "100%" }}>
      <DataGrid
        columnVisibilityModel={columnVisibilityModel}
        getRowId={(data) => data.Id}
        rows={data}
        columns={columns}
        rowsPerPage
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        disableSelectionOnClick
      />
    </div>
  );
}
