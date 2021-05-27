export interface SeriesApexChart {
  x: string;
  y: [
    /** from: date as number like new Date().getTime() */
    number,
    /** to: date as number like new Date().getTime() */
    number
  ];
  /** css color for bar in chart like `#008FFB` */
  fillColor: string;
}
