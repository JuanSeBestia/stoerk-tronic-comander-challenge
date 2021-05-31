import moment, { months } from "moment";
import axios from "axios";
import sleepPromise from "../../../shared/utils/mock/sleepPromise";
import {
  EventCommanderSensorData,
  EventCommanderSensorRangeData,
} from "../models/events";
import { FilterState } from "../models/filters";
import eventsToRangeEvents from "./eventsToRangeEvents";

export const API_URL = "https://some-api.com/api/commander/events";

/**
 * API for SensorCommander
 */
const eventCommanderAPI = {
  getEvents: (
    filterState: FilterState
  ): Promise<EventCommanderSensorRangeData[]> =>
    sleepPromise(500)
      .then(() => {
        const baseRaw =
          "https://raw.githubusercontent.com/JuanSeBestia/stoerk-tronic-comander-challenge/e83dc62d678c18644c73c221339d9a7deda05fea/public/example_data/";
        switch (filterState.dates.relative) {
          case "month":
            return axios.get(baseRaw + "sensorDataMonth.json");
          case "week":
            return axios.get(baseRaw + "sensorDataWeek.json");
          case "day":
            return axios.get(baseRaw + "sensorDataDay.json");
          case "hour":
            return axios.get(baseRaw + "sensorDataHour.json");

          default:
            return axios.get(baseRaw + "sensorDataHour.json");
        }
      })
      .then((data) => data.data as EventCommanderSensorData[])
      // Filter dates
      // .then((sensorData) =>
      //   sensorData.map((sensor) => ({
      //     ...sensor,
      //     values: sensor.values.filter(
      //       (value) =>
      //         moment(filterState.dates.from).isSameOrBefore(
      //           moment(value.timestamp)
      //         ) &&
      //         moment(filterState.dates.to).isSameOrAfter(
      //           moment(value.timestamp)
      //         )
      //     ),
      //   }))
      // )
      // TODO Filter components
      // TODO Filter state
      // Aggregate ranges
      .then((data) => eventsToRangeEvents(data, 60 * 5))
      .then((data) => {
        console.log("eventCommanderAPI:", { data });
        return data;
      }),
};
export default eventCommanderAPI;
