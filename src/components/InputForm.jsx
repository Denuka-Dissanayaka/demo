import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Btn = styled.button`
  background-color: blue;
  color: white;
  padding: 5px 10px;
  border: none;
`;

function InputForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <Container>
        {/* <div>
          <label htmlFor="">name</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div> */}

        <div>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>

        <div>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            sx={{ padding: "0px" }}
          />
        </div>

        {/* <div>
          <label htmlFor="">name</label>
          <br />
          <input type="date" name="" id="" />
        </div> */}

        <div>
          {/* <br />
          <Btn type="submit" onClick={() => {}}>
            Add Item
          </Btn> */}
          <Button variant="contained" sx={{ backgroundColor: "red" }}>
            Contained
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default InputForm;
