import _ from "lodash";
import { useState } from "react";
import { Card } from "react-bootstrap";

import "./Commander.scss";

import Loading from "../../shared/components/Loading";
import selectorGetSeries from "./state/selectorGetSeries";
import useEventCommanderRange from "./state/useEventCommanderRange";
import { EventComponentType, EventStateType } from "./models/events";
import { eventStateTypeColor } from "./business-logic/rangeEventsToApexchartSeries";
import Filters from "./components/Filters";
import { FilterState } from "./models/filters";
import moment from "moment";
import { ChartProps } from "./components/Charts/chart.model";
import { SomeComponent } from "./models/react";

export const initialFilterState: FilterState = {
  components: Object.values(EventComponentType),
  states: Object.values(EventStateType),
  dates: { from: moment().add(-10, "days"), to: moment() },
};
export interface CommanderProps {
  ChartComponent: SomeComponent<ChartProps>;
}
function Commander({ ChartComponent }: CommanderProps) {
  const [filterState, setFilterState] =
    useState<FilterState>(initialFilterState);

  const [eventCommanderRangeList, loading, error] =
    useEventCommanderRange(filterState);
  const series = selectorGetSeries(eventCommanderRangeList);

  return (
    <div className="Commander">
      <h1 className="text-primary text-center my-5">
        Commander: {series[0].title}
      </h1>
      <Card className="m-3">
        <div>
          <Filters filterState={filterState} setFilterState={setFilterState} />
        </div>
        <div id="chart">
          {loading ? <Loading /> : <ChartComponent data={series} />}
        </div>
      </Card>
    </div>
  );
}

export default Commander;
