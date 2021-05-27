import { SomeComponent } from "../../models/react";

export interface ChartProps {
  data: any[];
}

export interface ChartsItem {
  name: string;
  path: string;
  ChartComponent: SomeComponent<ChartProps>;
}
