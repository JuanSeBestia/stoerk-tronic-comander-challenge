import _ from "lodash";
import rangeEventsToApexchartSeries from "../business-logic/rangeEventsToApexchartSeries";

// optimizing state
const selectorGetSeries = _.memoize(
  (eventCommanderRangeList, title = "commander-1") => [
    {
      title,
      data: rangeEventsToApexchartSeries(eventCommanderRangeList),
    },
  ]
);

export default selectorGetSeries;
