/* eslint-disable prettier/prettier */
import styled from "vue3-styled-components";

export const StyledHeader = styled.header`
  .hubble {
    background-color: black;
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-top: 34px;
    margin-left: 5rem;
    

    .img1 {
      max-width: 100%;
      width: auto;
    }

    .btn1 {
       
        background-color:black;
      display: flex;
      justify-content: center;

      button {
        background-color:black;
        font-weight: 600;
        cursor: pointer;
        color:white;
        
      }
      img {
        width: 4%;
        padding-left: 40px;
        padding-right: 40px;
      }
    }
    .btn {
        background-color:black;
        color:white;
      font-weight: 600;
      cursor: pointer;
      margin-right: 1.25rem;
    }
  }
`;
