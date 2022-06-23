import { useContext, useState } from "react";
import { UsersContext } from "../../../data/AppContext/AppContext";
import styled from "styled-components";
import { ChildModal } from "../ChildModal/ChildModal";
import { Grid, Button, DialogActions, Dialog } from "@mui/material";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export const Modal = ({ param, SetOpenModal, setMessage }) => {
  const [open, setOpen] = useState(false);
  const { items } = useContext(UsersContext);

  const [users, setUsers] = useState(
    items.filter((item, i, arr) => arr.indexOf(item) === param.id)
  );

  return (
    <>
      {users.map((user, index) => {
        return (
          <>
            <Grid container>
              <Grid item xs={12}>
                <Circle>
                  <Photo src={user.picture.large} alt={user.name.first}></Photo>
                </Circle>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell> Name </TableCell>
                        <TableCell>ID </TableCell>
                        <TableCell> Gender </TableCell>
                        <TableCell> Date </TableCell>
                        <TableCell> Phone </TableCell>
                        <TableCell> Nat </TableCell>
                        <TableCell> Adress </TableCell>
                        <TableCell> Email </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell> {user.name.first} </TableCell>
                        <TableCell>{param.id} </TableCell>
                        <TableCell> {user.gender} </TableCell>
                        <TableCell>{user.dob.date} </TableCell>
                        <TableCell> {user.phone} </TableCell>
                        <TableCell> {user.nat} </TableCell>
                        <TableCell>                         
                          {user.location.street.name}/
                          {user.location.street.number}
                        </TableCell>
                        <TableCell> {user.email} </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
            <DialogActions>
              <Button
                onClick={() => 
                  {return (SetOpenModal(false) , setMessage("saved"))}
                }
                className="btn-top"
                color={"secondary"}
              >
                close
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setOpen(true);
                }}
              >
                URL para compartilhamento
              </Button>
            </DialogActions>
            <Dialog open={open} fullWidth onClose={() => setOpen(false) }>
              <ChildModal users={users}/>
            </Dialog>
          </>
        );
      })}
    </>
  );
};
const Circle = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(144, 238, 144) 5px 5px, rgba(144, 238, 144, 0.9) 10px 10px,
    rgba(144, 238, 144, 0.5) 15px 15px, rgba(144, 238, 144, 0.1) 20px 20px,
    rgba(144, 238, 144, 0.1) 25px 25px;
  border-radius: 50%;
  margin: 0 auto;
  padding: 5px;
  width: 200px;
  height: 200px;
  top: -10%;
`;
const Photo = styled("img")`
  width: 100%;
  border-radius: 50%;
`;