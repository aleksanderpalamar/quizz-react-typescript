import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;  
  width: 100%;

  margin-top: ${(props) => props.theme.spaces.$40};
  
  p {
    display: flex;
    align-items: center;

    gap: ${(props) => props.theme.spaces.$2};

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary.purple};
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.colors.primary.purple};
      }
    }
  }
`