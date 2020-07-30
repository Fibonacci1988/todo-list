import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

const Title = styled.div``;

const DeleteButton = styled.button``;

function TodoItem({ checkStatus, title, index, onDelete }) {
  const onDeleteClick = () => {
    onDelete(index);
  };

  return (
    <MainContainer>
      <input type="checkbox" defaultChecked={false}>{checkStatus}</input>
      <Title>{title}</Title>
      <DeleteButton onClick={onDeleteClick}> Delete Item </DeleteButton>
    </MainContainer>
  );
}

export default TodoItem;