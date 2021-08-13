import styled from "styled-components";

export const FlexSpace = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  justify-content: ${(props) => {
    if (props.content === "start") {
      return "start";
    }
    if (props.content === "between") {
      return "space-between";
    }
    if (props.content === "evenly") {
      return "space-evenly";
    }
    return "center";
  }};
  & > * {
    margin-right: 5px;
    ${(props) => props.margin && `margin: ${props.margin}`}
  }
`;

export const CovidFormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  flex-direction: column;
`;
