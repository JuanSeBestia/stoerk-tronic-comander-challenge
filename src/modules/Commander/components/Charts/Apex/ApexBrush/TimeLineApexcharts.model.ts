export interface TimeLineApexChart {
  name: string;
  data: Data[];
}

interface Data {
  x: number;
  y: number;

  /** css color for bar in chart like `#008FFB` */
  fillColor: string;
  state?: string;
}
