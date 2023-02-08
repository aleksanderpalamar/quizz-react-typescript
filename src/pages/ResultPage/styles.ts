import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    gap: ${(props) => props.theme.spaces.$4};
    margin-bottom: ${(props) => props.theme.spaces.$8};
    word-wrap: break-word;
    word-spacing: 0.05rem;

    h2 {
      font-size: ${(props) => props.theme.fontSizes["4xl"]}
    }
    span {
      font-size: ${(props) => props.theme.fontSizes["md"]};
      color: ${(props) => props.theme.colors.gray[200]}
    }
    p {
      font-size: ${(props) => props.theme.fontSizes["md"]};
      color: ${(props) => props.theme.colors.gray[100]};      
    }
  }

  footer {
    display: flex;
    align-items: center;
    
    button {
      all: unset;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: ${(props) => props.theme.spaces.$2};
      transition: opacity 0.2s;

      svg {
        width: 32px;
        height: 32px;

        path {
          fill: ${(props) => props.theme.colors.blue.typescript};
        }
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.spaces.$4};
    
    header {
      h2 {
        font-size: ${(props) => props.theme.fontSizes["3xl"]}
      }
      span {
        font-size: ${(props) => props.theme.fontSizes["sm"]};
      }
      p {
        font-size: ${(props) => props.theme.fontSizes["sm"]};
      }
    }
  }
`;
