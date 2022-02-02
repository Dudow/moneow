import Logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="moneow" />
        <button type="button">New transaction</button>
      </Content>
    </Container>
  );
};
