import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export const TransactionsTable = () => {
  useEffect(() => {
    api.get("/transactions").then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Site development</td>
            <td>R$12,000</td>
            <td>Development</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Site development</td>
            <td>R$12,000</td>
            <td>Development</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Site development</td>
            <td>R$12,000</td>
            <td>Development</td>
            <td>20/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
