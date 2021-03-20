import sleepPromise from "../../../shared/utils/mock/sleepPromise";
import {
  EventCommander,
  EventCommanderRange,
  EventComponentType,
} from "../models/events";
import { FilterState } from "../models/filters";
import eventsToRangeEvents from "./eventsToRangeEvents";
import eventsMock from "./mock/eventsMock";

export const API_URL = "https://some-api.com/api/commander/events";

function addEvents(
  events: Record<EventComponentType, EventCommander[]>,
  type: EventComponentType,
  filterState: FilterState
) {
  return filterState.components.includes(type)
    ? eventsToRangeEvents(events[type])
    : [];
}
/**
 * API for EventCommander
 */
const eventCommanderAPI = {
  getEvents: (
    filterState: FilterState
  ): Promise<Record<EventComponentType, EventCommanderRange[]>> =>
    sleepPromise()
      .then(() => {
        return eventsMock(filterState.dates.from, filterState.dates.to);
      })
      .then((events) =>
        Object.keys(events).reduce((dic, key) => {
          dic[key as EventComponentType] = events[
            key as EventComponentType
          ].filter((item) => filterState.states.includes(item.state));
          return dic;
        }, {} as Record<EventComponentType, EventCommander[]>)
      )
      .then((events) => ({
        [EventComponentType.DEVICE]: addEvents(
          events,
          EventComponentType.DEVICE,
          filterState
        ),
        [EventComponentType.COMPRESSOR]: addEvents(
          events,
          EventComponentType.COMPRESSOR,
          filterState
        ),
        [EventComponentType.FAN]: addEvents(
          events,
          EventComponentType.FAN,
          filterState
        ),
        [EventComponentType.LIGHT]: addEvents(
          events,
          EventComponentType.LIGHT,
          filterState
        ),
      }))
      .then((data) => {
        console.log("eventCommanderAPI:", { data });
        return data;
      }),
};
export default eventCommanderAPI;
