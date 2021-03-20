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

export interface EventCommander {
  timestamp: string | Moment
  type: EventComponentType,
  state: EventStateType
}

export interface EventCommanderRange {
  /** Date when start the state */
  from: string | Moment,
  /** Date when finish the state */
  to: string | Moment,
  type: EventComponentType,
  state: EventStateType
}
 