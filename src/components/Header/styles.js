import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 20px;

  background-color: #2c3e50;
  color: white;
  font-size: 18px;
`;

export const HeaderItem = styled.span`
  display: block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: white;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }
`;
