import Logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header = ({ onOpenModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="moneow" />
        <button type="button" onClick={onOpenModal}>
          New transaction
        </button>
      </Content>
    </Container>
  );
};
