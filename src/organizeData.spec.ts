import { expect, test } from "vitest";
import { organizeData } from "./organizeData.ts";

test("organizeData", () => {
  const data = `\
Ep 790, watched on 03/09/2024 at 12:17 Remove
Ep 789, watched on 03/09/2024 at 12:17 Remove
Ep 788, watched on 03/09/2024 at 11:45 Remove
Ep 787, watched on 03/09/2024 at 11:23 Remove\
`;

  const expected = [
    { date: new Date("03/09/2024 12:17"), episode: 790 },
    { date: new Date("03/09/2024 12:17"), episode: 789 },
    { date: new Date("03/09/2024 11:45"), episode: 788 },
    { date: new Date("03/09/2024 11:23"), episode: 787 },
  ];
  expect(
    organizeData(data).map((x) => ({ date: x.date, episode: x.episode })),
  ).toStrictEqual(expected);
});
