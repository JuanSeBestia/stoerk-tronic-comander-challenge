import moment, { Moment } from "moment";
import _ from "lodash";

import {
//   EventCommander,
  EventComponentType,
  EventStateType,
} from "../../models/events";

// Deleted type
type EventCommander = any
/**
 * get a state according a probability of last item in the list
 *
 * @param list list of events to extract the last
 * @param probabilityToPreserveState (optional) a number between [0-1] to get the same state of last event
 */
function getEventState(
  list: EventCommander[],
  probabilityToPreserveState: number = 0.9
): EventStateType {
  const lastItem = list[list.length - 1];
  if (!lastItem) return EventStateType.ON;
  if (Math.random() > probabilityToPreserveState) {
    const possiblesStates: EventStateType[] = Object.values(
      EventStateType
    ).filter((item) => item !== lastItem.state) as EventStateType[];
    return _.sample(possiblesStates) as EventStateType;
  } else {
    return lastItem.state;
  }
}
/**
 * Mutation for event dict-list to add a new event on each value
 *
 * @param type
 * @param timestamp
 * @param events
 */
function pushValue(
  type: EventComponentType,
  timestamp: Moment,
  events: Record<EventComponentType, EventCommander[]>
) {
  events[type].push({
    state: getEventState(events[type]),
    timestamp,
    type,
  });
}

function eventsMock(
  from: Moment = moment(),
  to: Moment = moment(from).add(70, "days")
): Record<EventComponentType, EventCommander[]> {
  const events: Record<EventComponentType, EventCommander[]> = {
    [EventComponentType.DEVICE]: [],
    [EventComponentType.COMPRESSOR]: [],
    [EventComponentType.FAN]: [],
    [EventComponentType.LIGHT]: [],
  };

  for (
    let currentMoment = moment(from);
    currentMoment.isSameOrBefore(to);
    // seconds a lot of examples
    // currentMoment = moment(currentMoment).add(10, "seconds")
    currentMoment = moment(currentMoment).add(10, "hours")
  ) {
    Object.values(EventComponentType).forEach((type) =>
      pushValue(type as EventComponentType, currentMoment, events)
    );
  }
  return events;
}

export default eventsMock;
