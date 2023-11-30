import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: blue;
  text-align: center;
`;

const Container = styled.div`
  padding: 20px;
`;

function Header() {
  return (
    <Container>
      <Title>Good Morning, Johny</Title>
    </Container>
  );
}

export default Header;
