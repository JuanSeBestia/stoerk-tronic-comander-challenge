import { Moment } from "moment";

export interface FilterState {
  components: string[];
  states: string[];
  dates: { from: Moment; to: Moment; relative?: "week" | "day" | "month" | "hour" };
}
