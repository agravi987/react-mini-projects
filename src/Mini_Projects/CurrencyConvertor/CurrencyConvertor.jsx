import React, { useState, useEffect } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function CurrencyConvertor() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Automatic conversion effect
  useEffect(() => {
    if (currencyInfo[to] && amount >= 0) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }, [amount, from, to, currencyInfo]); // Re-run when any of these change

  const swap = () => {
    setFrom(to);
    setTo(from);
    // No need to manually convert here - the useEffect will handle it
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-[#6e5585]">
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 bg-white/30">
        <div className="w-full mb-1">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amt) => setAmount(amt)}
          />
        </div>
        <div className="relative w-full h-0.5">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            onClick={swap}
          >
            swap
          </button>
        </div>
        <div className="w-full mt-1 mb-4">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
        </div>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
