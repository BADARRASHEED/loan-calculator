"use client";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Results } from "@/components/Results";
import { AppContext } from "@/context";
import { IState } from "@/model";
import { useState } from "react";

const initialState: IState = {
  principalAmount: 0,
  interestAmount: 0,
  totalAmount: 0,
  monthlyPayment: 0,
  currency: "$",
};

function App() {
  const [state, dispatch] = useState(initialState);

  return (
    <div className="m-0 p-0 bg-[#aed2c8]">
      <header>
        <Header />
      </header>
      <AppContext.Provider value={{ state, dispatch }}>
        <main className="bg-[#aed2c8] h-screen">
          <section>
            <div className="w-[62rem] m-auto mt-[2rem] text-[#123336]">
              This is a{" "}
              <span className="font-extrabold">
                Simple INTEREST LOAN PAYMENT CALCULATOR.
              </span>{" "}
              This calculator will help you determine the monthly payments on a
              loan. Simply enter the loan amount, term and interest rate in the
              fields below and click calculate
            </div>
          </section>

          <section>
            <div className="w-[62rem] flex my-[40px] mx-auto box-border shadow-md shadow-[#123336] rounded-md bg-[#FEFBF6]">
              <div className="w-[50%] p-5 box-border">
                <Form />
              </div>
              <div className="w-[50%] p-5 box-border">
                <Results />
              </div>
            </div>
          </section>
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
