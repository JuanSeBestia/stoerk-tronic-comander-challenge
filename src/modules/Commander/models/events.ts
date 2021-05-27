import { Moment } from "moment";

export enum EventComponentType {
  DEVICE = "DEVICE",
  COMPRESSOR = "COMPRESSOR",
  FAN = "FAN",
  LIGHT = "LIGHT",
}

export enum EventStateType {
  // pascal case for values according a challenge-2
  ON = "On",
  OFF = "Off",
  INVALID = "INVALID",
}
export interface EventCommanderSensorDataValue {
  /** Date */
  timestamp: number | Moment;
  value: number;
  valid: Boolean;
}
export interface EventCommanderSensorDataRangeValue {
  /** Date when start the state */
  from: number | Moment;
  /** Date when finish the state */
  to: number | Moment;
  acumulateValue: number;
  items: number;
  valid: Boolean;
}

export interface EventCommanderSensorData {
  /** Is a number in string like "1008","1009" */
  controlunit: string;
  /** Pronuciable name like "Régulateur 2, vitrine chocolat" */
  controlunitName: string;
  /** Sensor ChanelCode like "S01","F04" */
  channel: string;
  /** Magintude type of eache sensor */
  unit: "DEGREECELCIUS" | "PERCENT";
  values: EventCommanderSensorDataValue[];
}

export interface EventCommanderSensorRangeData
  extends EventCommanderSensorData {
  rangesValues: EventCommanderSensorDataRangeValue[];
}
