import { useState, useEffect } from "react";
import eventCommanderAPI from "../business-logic/eventCommanderAPI";
import { EventCommanderRange, EventComponentType } from "../models/events";
import { FilterState } from "../models/filters";

function useEventCommanderRange(filterState: FilterState) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<undefined | string>(undefined);
  const [eventCommanderRangeList, setEventCommanderRangeList] = useState<
    Record<EventComponentType, EventCommanderRange[]>
  >({
    [EventComponentType.DEVICE]: [],
    [EventComponentType.COMPRESSOR]: [],
    [EventComponentType.FAN]: [],
    [EventComponentType.LIGHT]: [],
  });

  useEffect(() => {
    setLoading(true);
    eventCommanderAPI
      .getEvents(filterState)
      .then(setEventCommanderRangeList)
      // .catch(setError)
      .finally(() => setLoading(false));
  }, [filterState]);

  return [eventCommanderRangeList, loading, error];
}
export default useEventCommanderRange;
