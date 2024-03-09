import { useMemo, useState } from "react";
import { organizeData } from "./organizeData.ts";

const App = () => {
  const [input, setInput] = useState("");
  const data = useMemo(() => organizeData(input), [input]);

  return (
    <div>
      <h1>Hello world</h1>
      <textarea
        placeholder="here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {data.map((d) => (
          <li key={d.key}>
            {d.episode} - {d.date.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
