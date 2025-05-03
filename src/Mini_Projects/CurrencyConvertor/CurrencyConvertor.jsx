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

  useEffect(() => {
    if (currencyInfo[to] && amount >= 0) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }, [amount, from, to, currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center bg-gradient-to-br from-purple-700 via-indigo-800 to-purple-900">
      <div className="w-full max-w-md mx-auto backdrop-blur-md border border-white/20 rounded-xl p-6 bg-white/20 shadow-lg">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">
          💱 RisingSun Currency Converter
        </h1>

        <div className="w-full mb-3">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amt) => setAmount(amt)}
          />
        </div>

        <div className="relative w-full h-0.5 my-4">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-medium px-4 py-1 rounded-full shadow-md"
            onClick={swap}
          >
            🔄 Swap
          </button>
        </div>

        <div className="w-full mt-3">
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
