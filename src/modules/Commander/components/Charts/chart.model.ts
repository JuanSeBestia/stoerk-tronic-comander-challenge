import { SomeComponent } from "../../models/react";

export interface ChartProps {
  data: any[];
}

export interface ChartsItem {
  name: string;
  path: string;
  ChartComponent: SomeComponent<ChartProps>;
}

export const OFF_COLOR = "#75757533";
export const DEVICE_COLOR = `#5189C8`;
export const COMPRESSOR_COLOR = `#8973D6`;
export const FAN_COLOR = `#F2BB38`;
export const LIGHT_COLOR = `#72E8A7`;

export const COLORS = [
  "#A54ED5",
  "#EE4F8D",
  "#FF9055",
  "#79EC4F",
  "#FFEB55",
  "#246CAC",
  "#582AB5",
  "#FFDA25",
  "#6D25B3",
  "#3C30B8",
  "#DE206D",
];
