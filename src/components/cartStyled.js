import styled from "styled-components";

export const Cartt = styled.div`
  width: 500px;
  height: 100vh;
  padding-left: 10px;
  overflow-y: scroll;
  border-left: 1px solid gray;
  position: absolute;
  display: ${({cart}) => cart ? 'block' : 'none'};
  right: ${({cart}) => cart ? '0px' : '-100%'};
  top: 0px;
  background-color: white;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
  h3 {
    margin: 10px;
    color: rgba(0, 0, 0, 0.7);
  }
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  .close {
    position: absolute;
    top: 30px;
    right: 10px;
    background-color: white;
    border: none;
  }
  .description {
    padding-top: 0px;
    .title{
      font-size: 20px;
      font-weight: 500;
    }
  }
`;