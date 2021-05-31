import moment from "moment";
import {
  EventCommanderSensorData,
  EventCommanderSensorDataRangeValue,
  EventCommanderSensorRangeData,
} from "../models/events";
/**
 * Map list of EventCommanderSensorData to list of EventCommanderSensorRangeData
 * @param listSensorData
 * @param precision
 * @returns
 */
function eventsToRangeEvents(
  listSensorData: EventCommanderSensorData[],
  precision: number = 12
): EventCommanderSensorRangeData[] {
  return listSensorData.map((sensorData) => {
    const rangesValues = sensorData.values.reduce(
      (listEventRange, itemEvent, index) => {
        // first item
        if (index === 0) {
          return [
            {
              from: itemEvent.timestamp,
              to: 0,
              valid: itemEvent.valid,
              acumulateValue: itemEvent.value,
              items: 1,
            },
          ];
        }
        const previousEvent = sensorData.values[index - 1];
        let lastEventRange = listEventRange[listEventRange.length - 1];

        // each item
        if (
          lastEventRange.valid !== itemEvent.valid ||
          !moment(previousEvent.timestamp)
            // TODO: change seconds
            .add(precision, "seconds")
            .isSameOrAfter(itemEvent.timestamp)
        ) {
          lastEventRange.to = itemEvent.timestamp;
          lastEventRange = {
            from: itemEvent.timestamp,
            to: 0,
            valid: itemEvent.valid,
            acumulateValue: itemEvent.value,
            items: 1,
          };
          listEventRange.push(lastEventRange);
        }
        lastEventRange.acumulateValue += itemEvent.value;
        lastEventRange.items += 1;

        // last item
        if (index === sensorData.values.length - 1) {
          lastEventRange.to = itemEvent.timestamp;
        }

        return listEventRange;
      },
      [] as EventCommanderSensorDataRangeValue[]
    );
    return { ...sensorData, rangesValues };
  });
}

export default eventsToRangeEvents;
