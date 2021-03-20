import sleepPromise from "../../../shared/utils/mock/sleepPromise";
import { EventCommanderRange, EventComponentType } from "../models/events";
import eventsToRangeEvents from "./eventsToRangeEvents";
import eventsMock from "./mock/eventsMock";

export const API_URL = "https://some-api.com/api/commander/events";

/**
 * API for EventCommander
 */
const eventCommanderAPI = {
  getEvents: (): Promise<Record<EventComponentType, EventCommanderRange[]>> =>
    sleepPromise()
      .then(() => eventsMock())
      .then((events) => ({
        [EventComponentType.DEVICE]: eventsToRangeEvents(
          events[EventComponentType.DEVICE]
        ),
        [EventComponentType.COMPRESSOR]: eventsToRangeEvents(
          events[EventComponentType.COMPRESSOR]
        ),
        [EventComponentType.FAN]: eventsToRangeEvents(
          events[EventComponentType.FAN]
        ),
        [EventComponentType.LIGHT]: eventsToRangeEvents(
          events[EventComponentType.LIGHT]
        ),
      }))
      .then((data) => {
        console.log("eventCommanderAPI:", { data });
        return data;
      }),
};
export default eventCommanderAPI;
