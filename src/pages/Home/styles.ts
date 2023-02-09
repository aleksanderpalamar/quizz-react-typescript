import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  h1 {
    margin-top: ${(props) => props.theme.spaces.$4};
    margin-bottom: ${(props) => props.theme.spaces.$4};
    font-size: ${(props) => props.theme.fontSizes["2xl"]};
  }

  div {
    margin-bottom: ${(props) => props.theme.spaces.$4};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.spaces.$4};

    span {
      display: flex;
      align-items: center;
      gap: ${(props) => props.theme.spaces.$2};

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      gap: ${(props) => props.theme.spaces.$2};

      button {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        
        background-color: ${(props) => props.theme.colors.primary.purple};
        padding: ${(props) => props.theme.spaces.$1};
        border-radius: ${(props) => props.theme.radius.md};
      }
    }
  }

  p {
    word-wrap: break-word;
    max-width: 400px;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${(props) => props.theme.spaces.$4};
    border: 0;
    cursor: pointer;
    padding: ${(props) => props.theme.spaces.$4};
    border-radius: ${(props) => props.theme.radius.md};
    background-color: ${(props) => props.theme.colors.primary.purple};
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.fontSizes.md};
    transition: background-color 0.2s;
    width: 280px;

    &:hover {
      background-color: ${(props) => props.theme.colors.primary["purple-dark"]};
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: ${(props) => props.theme.fontSizes["2xl"]};
    }
  }
`;
