import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spaces.$8};

  pre {
    background-color: ${(props) => props.theme.colors.gray[800]};
    color: ${(props) => props.theme.colors.gray[100]};
    padding: ${(props) => props.theme.spaces.$4};
    border-radius: ${(props) => props.theme.radius.md};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 768px) {
    pre {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: ${(props) => props.theme.spaces.$2};
      font-size: ${(props) => props.theme.fontSizes.xs};
    }
  }
`;

export const QuizContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${(props) => props.theme.spaces.$2};
  padding: ${(props) => props.theme.spaces.$40};

  p {
    font-size: ${(props) => props.theme.fontSizes["lg"]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${(props) => props.theme.spaces.$2};

    button {
      all: unset;
      cursor: pointer;
      width: 100%;
      background-color: ${(props) => props.theme.colors.gray[800]};
      color: ${(props) => props.theme.colors.gray[100]};
      padding: ${(props) => props.theme.spaces.$8};
      border-radius: ${(props) => props.theme.radius.md};
      font-size: ${(props) => props.theme.fontSizes.md};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: ${(props) => props.theme.colors.gray[700]};
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      word-wrap: break-word;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.spaces.$8};
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spaces.$2};
  padding: ${(props) => props.theme.spaces.$4};

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${(props) => props.theme.spaces.$1};
    p {
      font-size: ${(props) => props.theme.fontSizes.sm};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      color: ${(props) => props.theme.colors.gray[100]};

      span {
        background-color: ${(props) => props.theme.colors.primary.purple};
        color: ${(props) => props.theme.colors.gray[900]};
        padding: ${(props) => props.theme.spaces.$1};
        border-radius: ${(props) => props.theme.radius.md};
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Progress = styled.progress`
  width: 1440px;
  height: 0.5rem;
  border-radius: ${(props) => props.theme.radius.md};
  background-color: ${(props) => props.theme.colors.gray[100]};
  color: ${(props) => props.theme.colors.gray[100]};
  -webkit-appearance: none;
  -moz-appearance: none;
  &::-webkit-progress-bar {
    background-color: ${(props) => props.theme.colors.gray[200]};
    border-radius: ${(props) => props.theme.radius.full};
  }

  &::-webkit-progress-value {
    background-color: ${(props) => props.theme.colors.primary.purple};
    border-radius: ${(props) => props.theme.radius.full};
  }

  @media (max-width: 768px) {
    width: 380px;
  }
`;
