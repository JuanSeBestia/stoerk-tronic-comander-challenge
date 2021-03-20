import _ from "lodash";
import ReactApexChart from "react-apexcharts";

import options from "../../shared/apexcharts/config";
import selectorGetSeries from "./state/selectorGetSeries";
import useEventCommanderRange from "./state/useEventCommanderRange";

import "./Commander.scss";

function Commander() {
  const [eventCommanderRangeList, loading, error] = useEventCommanderRange();
  const series = selectorGetSeries(eventCommanderRangeList);
  return (
    <div className="Commander">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="rangeBar"
          height={500}
        />
      </div>
      <div>{JSON.stringify({ loading, error })}</div>
    </div>
  );
}

export default Commander;
