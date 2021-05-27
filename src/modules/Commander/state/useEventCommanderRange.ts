import { useState, useEffect } from "react";
import SeonsorCommanderAPI from "../business-logic/eventCommanderAPI";
import { EventCommanderSensorRangeData } from "../models/events";
import { FilterState } from "../models/filters";

function useEventCommanderRange(filterState: FilterState) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<undefined | string>(undefined);
  const [sensorDataRangeList, setSensorDataRangeList] = useState<
    EventCommanderSensorRangeData[]
  >([]);

  useEffect(() => {
    setLoading(true);
    SeonsorCommanderAPI.getEvents(filterState)
      .then(setSensorDataRangeList)
      // .catch(setError)
      .finally(() => setLoading(false));
  }, [filterState]);

  return {sensorDataRangeList, loading, error};
}
export default useEventCommanderRange;
