import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import Card from "../components/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../features/itemSlice";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

function Home() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { value, loading } = useSelector((state) => state.items);

  // console.log(items);

  // async function fetchData() {
  //   try {
  //     const response = await axios.get("http://localhost:8000/key");
  //     console.log(response.data);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <div>
      <Header />
      <InputForm />
      <CardContainer>
        <div>
          {value.length > 0
            ? value.map((value) => {
                return <Card name={value.name} id={value.id} />;
              })
            : ""}
        </div>
      </CardContainer>
    </div>
  );
}

export default Home;
