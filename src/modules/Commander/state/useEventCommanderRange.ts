import { useState, useEffect } from "react";
import eventCommanderAPI from "../business-logic/eventCommanderAPI";
import { EventCommanderRange, EventComponentType } from "../models/events";

function useEventCommanderRange() {
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
    eventCommanderAPI
      .getEvents()
      .then(setEventCommanderRangeList)
      // .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return [eventCommanderRangeList, loading, error];
}
export default useEventCommanderRange;
