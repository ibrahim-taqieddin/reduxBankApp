import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Header from "./Header";
import Footer from "./footer";

export default function Home() {
  const accounts = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="container col-12 mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Account Number</th>
              <th scope="col">Account Type</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => {
              return (
                <>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {account.id}
                    </th>
                    <td class="py-4 px-6">{account.customerName}</td>
                    <td class="py-4 px-6">{account.accountNumber}</td>
                    <td class="py-4 px-6">{account.accountType}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
