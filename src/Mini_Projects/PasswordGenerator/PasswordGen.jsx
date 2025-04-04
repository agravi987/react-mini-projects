import React, { useCallback, useState, useEffect, useRef } from "react";

function PasswordGen() {
  // state variables
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const passwordRef = useRef(null);

  // function to generate password
  const generatePassword = useCallback(() => {
    let pass = "";
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      pass += characters.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, includeNumbers, includeSymbols]);

  // useeffect to generate password when length or options change
  useEffect(() => {
    generatePassword();
  }, [generatePassword, length, includeNumbers, includeSymbols]);

  // function to copy to clipboard
  const copyToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 99999);
      window.navigator.clipboard.writeText(passwordRef.current.value);
    }
  }, [passwordRef]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-extrabold mb-6 text-violet-400">
        RisingSun Password Generator
      </h1>

      <div className="container flex flex-col gap-6 items-center justify-center bg-gray-800 shadow-lg border border-violet-500 rounded-lg p-6 w-full max-w-lg">
        <div className="flex items-center w-full gap-2">
          <input
            type="text"
            placeholder="Your Password"
            className="w-full border border-violet-500 bg-gray-700 text-violet-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-violet-400 text-2xl"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-violet-500 hover:bg-violet-600 transition text-white px-4 py-2 rounded-lg"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="w-full">
          <label className="block mb-2 text-violet-300 font-medium">
            Password Length
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="10"
              max="50"
              defaultValue={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full accent-violet-500"
            />
            <span className="bg-gray-700 text-violet-300 px-3 py-1 rounded-md">
              {length}
            </span>
          </div>
        </div>

        <div className="w-full">
          <label className="block text-violet-300 font-medium mb-2">
            Options
          </label>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-violet-300">
              <input
                type="checkbox"
                className="accent-violet-500"
                onClick={() => {
                  setIncludeNumbers((prev) => !prev);
                }}
              />
              Numbers
            </label>
            <label className="flex items-center gap-2 text-violet-300">
              <input
                type="checkbox"
                className="accent-violet-500"
                onClick={() => {
                  setIncludeSymbols((prev) => !prev);
                }}
              />
              Symbols
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGen;
