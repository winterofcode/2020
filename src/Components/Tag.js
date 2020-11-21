import React from "react";
import styled from "styled-components"

const TagStyles = styled.div`
    margin-right: 10px;
    padding: 0.125rem 0.5rem;
    background-color: #e2e8f0;
    border-radius: 0.125rem;
    box-shadow: 0rem 0.7rem 1.4rem rgba(0,0,0,0.07);
    font-size: 1rem;
    font-weight: 500;
    color: #4a5568;
` 

const Tag = ({ text }) => (
  <TagStyles>{text}</TagStyles>
);

export default Tag;