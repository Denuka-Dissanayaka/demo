import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

import { deleteItem } from "../features/itemSlice";
import { deleteItems } from "../features/itemSlice";
import { getItems } from "../features/itemSlice";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 700px;
  background-color: #d2d2d2;
  margin: 10px;
`;

const GridItem = styled.div`
  padding: 10px;
`;

function Card({ name, id }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <GridItem>{name}</GridItem>
        <GridItem></GridItem>
        <GridItem>
          <button onClick={handleClickOpen}>edit</button>
          <button
            onClick={() => {
              dispatch(deleteItems({ id }));
            }}
          >
            delete
          </button>
        </GridItem>
      </Container>

      <Dialog onClose={handleClose} open={open}>
        <div style={{ backgroundColor: "white", padding: "20px" }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
      </Dialog>
    </>
  );
}

export default Card;
