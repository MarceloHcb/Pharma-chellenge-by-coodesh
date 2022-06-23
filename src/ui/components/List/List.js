import { useContext, useState } from "react";
import { UsersContext } from "../../../data/AppContext/AppContext";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Dialog, Snackbar } from "@mui/material";
import { Modal } from "../Modal/Modal";
import { Search } from "../Search/Search";

export const List = () => {
  const { items } = useContext(UsersContext);
  const [param, setParam] = useState({});
  const [message, setMessage] = useState("");
  const [openModal, SetOpenModal] = useState(false);
 
  const columns = [
    {
      field: "image",
      headerName: "Photo",
      width: 150,
      editable: true,
      renderCell: (params) => <img className="img" src={params.value} />,
    },
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();        
          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};
          SetOpenModal(true);
          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          return setParam(params);
        };

        return (
          <Button variant="outlined" onClick={onClick}>            
            View More
          </Button>
        );
      },    
    },
  ];
 
  const rows = items.map((item, index) => {
    return {
      id: index,
      gender: item.gender,
      lastName: item.name.last,
      firstName: item.name.first,
      age: item.dob.age,
      image: item.picture.thumbnail,
    };
  });

  return (
    <>
    <Search SetOpenModal={SetOpenModal} param={param} setParam={setParam} />
      <Box sx={{ height: 600, width: "80%", margin: "0 auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
        <Dialog open={openModal} fullWidth onClose={()=> {return (SetOpenModal(false) , setMessage("saved"))}}>
          <Modal SetOpenModal={SetOpenModal} param={param} setMessage={setMessage}/>
        </Dialog>
        <Snackbar
          open={message.length > 0}
          autoHideDuration={2500}
          message={message}
          onClose={() => setMessage("")}
        />
      </Box>
    </>
  );
};