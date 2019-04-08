import styled from "styled-components"

export const UserListWrapper = styled.div`
  max-width: 50%;
  min-width: 30%;
  margin: 100px auto;
  font-size: 2.3rem;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    color: #274759;
    font-weight: bold;
  }
`

export const UserInfo = styled.li`
  background-color: rgba(172, 172, 172, 0.3);
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 15px;

  div {
    margin-bottom: 10px;
  }

  span,
  i {
    color: #274759;
    margin-right: 10px;
  }
`
