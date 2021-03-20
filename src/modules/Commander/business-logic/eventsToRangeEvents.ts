import moment from "moment";
import { EventCommander, EventCommanderRange } from "../models/events";
/**
 * Map list of EventCommander to list of EventCommanderRange
 * @param listEvents
 * @param precision
 * @returns
 */
function eventsToRangeEvents(
  listEvents: EventCommander[],
  precision: number = 12
): EventCommanderRange[] {
  return listEvents.reduce((listEventRange, itemEvent, index) => {
    // first item
    if (index === 0)
      return [
        {
          from: itemEvent.timestamp,
          to: "",
          type: itemEvent.type,
          state: itemEvent.state,
        },
      ];
    const previousEvent = listEvents[index - 1];
    let lastEventRange = listEventRange[listEventRange.length - 1];

    // each item
    if (
      lastEventRange.state !== itemEvent.state ||
      !moment(previousEvent.timestamp)
      // TODO: change seconds
        .add(precision, "hours")
        .isSameOrAfter(itemEvent.timestamp)
    ) {
      lastEventRange.to = itemEvent.timestamp;
      lastEventRange = {
        from: itemEvent.timestamp,
        to: "",
        type: itemEvent.type,
        state: itemEvent.state,
      };
      listEventRange.push(lastEventRange);
    }

    // last item
    if (index === listEvents.length - 1) {
      lastEventRange.to = itemEvent.timestamp;
    }

    return listEventRange;
  }, [] as EventCommanderRange[]);
}

export default eventsToRangeEvents;
