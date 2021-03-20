import _ from "lodash";
import { ReactNode, useRef, useState } from "react";
import { Accordion, Button, Card, Form } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";

import "./Commander.scss";

import options from "../../shared/apexcharts/config";
import Loading from "../../shared/components/Loading";
import selectorGetSeries from "./state/selectorGetSeries";
import useEventCommanderRange from "./state/useEventCommanderRange";
import { EventComponentType, EventStateType } from "./models/events";
import { eventStateTypeColor } from "./business-logic/rangeEventsToApexchartSeries";
import Filters from "./components/Filters";
import { FilterState } from "./models/filters";
import moment from "moment";

export const initialFilterState: FilterState = {
  components: Object.values(EventComponentType),
  states: Object.values(EventStateType),
  dates: { from: moment().add(-10, "days"), to: moment() },
};

function Commander() {
  const [filterState, setFilterState] = useState<FilterState>(
    initialFilterState
  );

  const [eventCommanderRangeList, loading, error] = useEventCommanderRange(filterState);
  const series = selectorGetSeries(eventCommanderRangeList);

  return (
    <div className="Commander">
      <h1  className="text-primary text-center my-5">Commander: {series[0].title}</h1>
      <Card className="m-3">
        <div>
          <Filters filterState={filterState} setFilterState={setFilterState} />
        </div>
        <div id="chart">
          {loading ? (
            <Loading />
          ) : (
            <ReactApexChart
              options={options}
              series={series}
              type="rangeBar"
              height={500}
            />
          )}
        </div>
      </Card>
    </div>
  );
}

export default Commander;
