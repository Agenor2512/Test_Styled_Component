import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  width: 20rem;
  height: 30rem;
  background-image: url("src/assets/card_background.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 95px;
  align-items: flex-start;
`;

const ArticleContainer = styled.p`
  width: 17rem;
  margin-left: 2rem;
  margin-bottom: 6rem;
  font-size: 1rem;
  color: white;
`;

export default Container;
Header;
ArticleContainer;
