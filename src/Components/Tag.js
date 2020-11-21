import React from "react";
import styled from "styled-components"

const TagStyles = styled.div`
    margin-right: 1rem;
    padding: 0.25rem 0.6rem;
    background-color: #e2e8f0;
    border-radius: 0.125rem;
    box-shadow: 0rem 0.7rem 1.4rem rgba(0,0,0,0.07);
    font-size: 1rem;
    display: inline-block;
    font-weight: 600;
    color: #4a5568;
` 

const Tag = ({ text }) => (
  <TagStyles>{text}</TagStyles>
);

export default Tag;