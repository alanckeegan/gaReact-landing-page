import styled from "styled-components";
import React from 'react'

const ListItemDiv = styled.li`
width: 25%;
border-bottom:2px solid #9942E5;
display: inline-block;
`;

const ListItem = ({firstName, lastName, initials, photo}) => (
<ListItemDiv>
<h3>{firstName} {lastName}</h3>
</ListItemDiv>
)


export default ListItem
