import { useMemo, useState } from "react";
import { organizeData } from "./organizeData.ts";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { mockData } from "./mockData.ts";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const App = () => {
  const [input, setInput] = useState(mockData);
  const data = useMemo(() => organizeData(input), [input]);

  return (
    <div>
      <h1>Hello world</h1>
      <textarea
        placeholder="here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <details>
        <summary>The data</summary>
        <ul>
          {data.map((d) => (
            <li key={d.key}>
              {d.episode} - {d.date.toLocaleString()}
            </li>
          ))}
        </ul>
      </details>
      <Scatter
        data={{
          datasets: [
            {
              label: "A dataset",
              data: data.map((d) => ({ x: d.date, y: d.episode })),
              backgroundColor: "rgba(255, 99, 132, 1)",
            },
          ],
        }}
      />
    </div>
  );
};

export default App;
