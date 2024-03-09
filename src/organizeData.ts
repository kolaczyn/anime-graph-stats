type GraphData = {
  date: Date;
  episode: number;
  key: number;
};

const organizeLine = (line: string): GraphData | null => {
  const regex = /Ep (\d+), watched on (\d+\/\d+\/\d+) at (\d+:\d+)/;
  const match = line.match(regex);
  if (!match) return null;
  const episode = parseInt(match[1]);
  const date = new Date(`${match[2]} ${match[3]}`);
  return { date, episode, key: Math.random() };
};

export const organizeData = (data: string): GraphData[] => {
  const baseData = data
    .split("\n")
    .map(organizeLine)
    .filter((x) => x !== null) as GraphData[];
  return filterData(baseData);
};

export const filterData = (data: GraphData[]): GraphData[] =>
  data.filter((x) => x.episode < 2000);
