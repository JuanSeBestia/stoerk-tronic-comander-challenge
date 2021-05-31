import { BaseChartOptions } from "devextreme/viz/chart_components/base_chart";

import moment from "moment";
import { EventCommanderSensorRangeData, EventStateType } from "../../../models/events";

function mapEventsToRangeDevExtreme(
  listSensors: EventCommanderSensorRangeData[]
): BaseChartOptions["dataSource"] {
  return listSensors.flatMap((sensor, indexSensor) =>
    sensor.rangesValues.map((event) => ({
      state: event.valid ? EventStateType.ON : EventStateType.INVALID,
      from: event.from,
      to: event.to,
      "controlunit-channel": `${sensor.controlunit}-${sensor.channel}`,
    }))
  );
}
export default mapEventsToRangeDevExtreme;
