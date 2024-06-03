import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "@/context";
import { calculatePayment } from "@/functions";
import { IValues } from "@/model";
import "@/styles/Form.css";

export const Form = () => {
  const { dispatch, state } = useContext(AppContext);

  const [principal, setPrincipal] = useState<number>(5000);
  const [loanTermInYears, setLoanTermInYears] = useState<number>(4);
  const [loanTermInMonths, setLoanTermInMonths] = useState<number>(48);
  const [interestRate, setInterestRate] = useState<number>(6.5);

  const handleLoanTermInYears = (e: ChangeEvent<HTMLInputElement>) => {
    const termInYears: number = Number(e.target.value);
    const termInMonths: number = termInYears * 12;
    setLoanTerms(termInYears, termInMonths);
  };

  const handleLoanTermInMonths = (e: ChangeEvent<HTMLInputElement>) => {
    const termInMonths: number = Number(e.target.value);
    const termInYears: number = termInMonths / 12;
    setLoanTerms(termInYears, termInMonths);
  };

  const setLoanTerms = (termInYears: number, termInMonths: number) => {
    setLoanTermInYears(termInYears);
    setLoanTermInMonths(termInMonths);
  };

  const calculateMonthlyPayment = () => {
    const values: IValues = {
      principal,
      loanTermInYears,
      loanTermInMonths,
      interestRate,
    };

    const { principalAmount, interestAmount, totalAmount, monthlyPayment } =
      calculatePayment(values);

    dispatch((prevState) => ({
      ...prevState,
      principalAmount,
      interestAmount,
      totalAmount,
      monthlyPayment,
    }));
  };

  useEffect(() => {
    calculateMonthlyPayment();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="form-item loan-amt">
        <label htmlFor="loanAmount">Loan amount</label>
        <input
          type="number"
          id="loanAmount"
          placeholder="E.g 5000"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
        <select
          className="mt-[2px] h-12 w-[6rem]"
          value={state.currency}
          onChange={(e) =>
            dispatch((prevState) => ({
              ...prevState,
              currency: e.target.value,
            }))
          }
        >
          <option value="$">$</option>
          <option value="Rs">Rs</option>
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="loanTermYears">Loan term in years</label>
        <input
          type="number"
          id="loanTermYears"
          placeholder="E.g 4"
          value={loanTermInYears}
          onChange={handleLoanTermInYears}
        />
      </div>
      <div className="form-item">
        <label htmlFor="loanTermMonths">Loan term in months</label>
        <input
          type="number"
          id="loanTermMonths"
          placeholder="E.g 48"
          value={loanTermInMonths}
          onChange={handleLoanTermInMonths}
        />
      </div>
      <div className="form-item interest-rate">
        <label htmlFor="interest">Interest rate per year</label>
        <input
          type="number"
          id="interest"
          placeholder="E.g 6.5"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </div>
      <div className="calculate">
        <button className="calculateBtn" onClick={calculateMonthlyPayment}>
          Calculate
        </button>
      </div>
    </div>
  );
};
