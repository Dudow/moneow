import { Container } from "./styles";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong>- R$800,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$200,00</strong>
      </div>
    </Container>
  );
};
