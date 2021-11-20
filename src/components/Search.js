import React from "react";
import styled from "styled-components";

function Search({ onSubmit }){
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event.target.elements.filter.value);
    };
    
    return (
        <Form onSubmit={handleSubmit}>
            <Input name="filter" placeholder="  Search here"/>
            <Button>Click</Button>
        </Form>
    );
}

const Form = styled.form`
    margin-top: 25px;
`;
const Input = styled.input`
    background-color: #f4d8e6;
    border-radius: 15px;
    border-width: 2px;
    border-color: #e895bc;
`;

const Button = styled.button`
    background-color: #e895bc;
    border-radius: 50px;
    color: white;
    border: none;
    height: 25px;
`;

export default Search;