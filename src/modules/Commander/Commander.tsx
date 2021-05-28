import _ from "lodash";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import "./Commander.scss";

import Loading from "../../shared/components/Loading";
import useEventCommanderRange from "./state/useEventCommanderRange";
import { EventComponentType, EventStateType } from "./models/events";
import Filters, { FilterProps } from "./components/Filters";
import { FilterState } from "./models/filters";
import moment from "moment";
import { ChartProps, COLORS } from "./components/Charts/chart.model";
import { SomeComponent } from "./models/react";

export const initialFilterState: FilterState = {
  components: [],
  states: Object.values(EventStateType),
  dates: { from: moment().add(-10, "days"), to: moment() },
};
export interface CommanderProps {
  ChartComponent: SomeComponent<ChartProps>;
}
function Commander({ ChartComponent }: CommanderProps) {
  const [filterState, setFilterState] =
    useState<FilterState>(initialFilterState);

  const { sensorDataRangeList, loading, error } =
    useEventCommanderRange(filterState);
  const [componentsOptions, setComponentsOptions] =
    useState<FilterProps['componentsOptions']>([]);

  useEffect(() => {
    const options = sensorDataRangeList.map((sensor, index) => ({
      text: `${sensor.controlunit}-${sensor.channel}: ${sensor.controlunitName}`,
      value: sensor,
      id: `${sensor.controlunit}-${sensor.channel}`,
      color: COLORS[index],
    }));
    setComponentsOptions(options);
  }, []);

  return (
    <div className="Commander">
      <h1 className="text-primary text-center my-5">
        Commander: Example Comander
      </h1>
      <Card className="m-sm-3">
        <div>
          <Filters
            filterState={filterState}
            setFilterState={setFilterState}
            componentsOptions={componentsOptions}
          />
        </div>
        <div id="chart">
          {loading ? (
            <Loading />
          ) : (
            <ChartComponent data={sensorDataRangeList} />
          )}
        </div>
      </Card>
    </div>
  );
}

export default Commander;
