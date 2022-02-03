import { FormEvent, useState } from "react";
import Modal from "react-modal";
import close from "../../assets/close.svg";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import { api } from "../../services/api";
import { Container, TransactionTypeContainer, TypeButton } from "./styles";

interface newTransactionModalProps {
  isModalOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isModalOpen,
  onRequestClose,
}: newTransactionModalProps) => {
  const [transactionType, setTransactionType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      transactionType,
    };

    api.post("/transaction", data);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={close} alt="Close modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register new transaction</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <TypeButton
            type="button"
            isActive={transactionType === "deposit"}
            onClick={() => setTransactionType("deposit")}
            activeColor="green"
          >
            <img src={income} alt="Income" />
            <span>Income</span>
          </TypeButton>
          <TypeButton
            isActive={transactionType === "withdraw"}
            type="button"
            activeColor="red"
            onClick={() => setTransactionType("withdraw")}
          >
            <img src={outcome} alt="Outcome" />
            <span>Outcome</span>
          </TypeButton>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
};
