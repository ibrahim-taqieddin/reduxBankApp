import { createStore } from "redux";

const initState = {
  accounts: [
    {
      id: 1,
      customerName: " John Stone",
      accountNumber: "123456",
      accountType: "Savings account",
    },
    {
      id: 2,
      customerName: "Blair Verona",
      accountNumber: "987654",
      accountType: "Student account",
    },
    {
      id: 3,
      customerName: "Mia Wong",
      accountNumber: "956897",
      accountType: "Current account",
    },
    {
      id: 4,
      customerName: "Harry Daly",
      accountNumber: "987654",
      accountType: "Salary account",
    },
    {
      id: 5,
      customerName: "Adam Smith",
      accountNumber: "989663",
      accountType: "Savings account",
    },
  ],
};

const reducer = (state = initState, action) => {
  return state;
};

const Store = createStore(reducer);
export default Store;
