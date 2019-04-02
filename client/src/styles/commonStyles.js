import styled from "styled-components"

export const Message = styled.div`
  color: ${props => (props.error ? "palevioletred" : "rebeccapurple")};
  font-size: 2.2rem;
  margin-bottom: 20px;
`
