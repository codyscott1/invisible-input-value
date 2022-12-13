import { useRef, useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => setValue(value);
  const inputRef = useRef(null);

  return (
    <div className="p-8">
      <div className="relative">
        <input
          type="text"
          placeholder=" "
          className="text-[16px] border-2 peer h-12 text-white selection:bg-[#fffff1] w-48"
          onChange={handleChange}
          value={value}
          ref={inputRef}
        />
        <span className="text-[8px] absolute left-1 top-0 peer-placeholder-shown:top-1 peer-placeholder-shown:text-[12px] transition-all">
          This will not zoom on ios
        </span>
        <span
          className="absolute top-3 left-1 text-[12px] pointer-events-none"
          onClick={inputRef?.current?.focus}
        >
          {value}
        </span>
      </div>
      <input
        type="text"
        className="text-[12px] h-12 border-2 mt-8 w-48"
        placeholder="This will zoom your IOS device"
      />
    </div>
  );
}

export default App;
