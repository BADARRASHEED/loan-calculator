import { useContext } from "react";
import { AppContext } from "@/context";

export const Results = () => {
  const { state } = useContext(AppContext);

  const getFormattedNumber = (value: number): string => {
    return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  return (
    <div className="px-[1.25rem] py-[2.5rem] text-[#65451F]">
      <div className="flex justify-between my-[0.625rem] mx-0">
        <div>Total principal amount to pay</div>
        <div>
          {state.currency} {getFormattedNumber(state.principalAmount)}
        </div>
      </div>

      <div className="flex justify-between my-[0.625rem] mx-0">
        <div>Total interest to pay</div>
        <div>
          {state.currency} {getFormattedNumber(state.interestAmount)}
        </div>
      </div>
      <hr className="border-2 border-[#765827]"/>
      <div className="flex justify-between my-[0.625rem] mx-0 font-bold">
        <div>Total Loan amount to pay</div>
        <div>
          {state.currency} {getFormattedNumber(state.totalAmount)}
        </div>
      </div>

      <div className="mt-[4rem] text-center">
        <div>Monthly payment</div>
        <div>
          <span className="font-bold align-[20px]">{state.currency}</span>{" "}
          <span className="font-bold text-[3rem] mt-[-20px]">
            {getFormattedNumber(state.monthlyPayment)}
          </span>
        </div>
      </div>
    </div>
  );
};
