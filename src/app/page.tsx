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
    <div className="m-0 p-0">
      <header>
        <Header />
      </header>
      <AppContext.Provider value={{ state, dispatch }}>
        <main>
          <section>
            <div className="w-[62rem] m-auto mt-[2rem]">
              This is a{" "}
              <span className="font-extrabold">
                SIMPLE INTEREST LOAN PAYMENT CALCULATOR.
              </span>{" "}
              This calculator will help you determine the monthly payments on a
              loan. Simply enter the loan amount, term and interest rate in the
              fields below and click calculate
            </div>
          </section>

          <section>
            <div className="w-[62rem] flex my-[40px] mx-auto box-border shadow-md shadow-rose-300 rounded-md">
              <div className="w-[50%] p-5 box-border bg-[#f3f4f8]">
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
