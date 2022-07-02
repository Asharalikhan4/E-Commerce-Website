import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: bolder;
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Order Over 999Rs
    </Container>
  )
}

export default Announcement;