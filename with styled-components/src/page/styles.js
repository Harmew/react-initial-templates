import styled from "styled-components";

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em ${({ theme }) => theme.colors.primary});
  }
`;

export const Card = styled.div`
  padding: 2em;
`;

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
