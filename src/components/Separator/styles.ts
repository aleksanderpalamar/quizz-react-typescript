import styled from "styled-components";

export const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  gap: ${(props) => props.theme.spaces.$4};
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  border: 1px solid ${(props) => props.theme.colors.gray[700]};
  margin-bottom: ${(props) => props.theme.spaces.$8};
`