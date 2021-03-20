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

function toggleItem<T>(list: T[], item: T) {
  const elementInList = list.find((itemList) => _.isEqual(item, itemList));
  if (!!elementInList) {
    return list.filter((itemList) => itemList !== elementInList);
  }
  return [...list, item];
}

function hasItem<T>(list: T[], item: T) {
  const elementInList = list.find((itemList) => _.isEqual(item, itemList));
  return !!elementInList;
}
interface MultipleChoseFormProps {
  label?: ReactNode;
  controlId: string;
  options: { text: ReactNode; value: any; id: string; color?: string }[];
  field: string[];
  setField: (list: string[]) => void;
}

export function MultipleChoseForm({
  controlId,
  field,
  setField,
  options,
  label,
}: MultipleChoseFormProps) {
  return (
    <Card.Body>
      <Form.Group controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        {options.map((item) => (
          <Form.Check
            id={item.id}
            type="checkbox"
            name={item.id}
            label={item.text}
            onChange={() => setField(toggleItem(field, item.value))}
            checked={hasItem(field, item.value)}
            style={
              item.color
                ? {
                    color: item.color,
                  }
                : undefined
            }
          />
        ))}
      </Form.Group>
    </Card.Body>
  );
}

export interface FilterState {
  components: string[];
  states: string[];
}

export enum FilterTypes {
  COMPONENTS = "COMPONENTS",
  STATES = "STATES",
  DATES = "DATES",
}

export const initialState = {
  components: [],
  states: [],
};

export function Filters() {
  const refForm = useRef<HTMLFormElement | null>(null);
  const [filterState, setFilterState] = useState<FilterState>(initialState);
  const { components, states } = filterState;
  const setComponents = (components: string[]) =>
    setFilterState({ ...filterState, components });
  const setStates = (states: string[]) =>
    setFilterState({ ...filterState, states });
  return (
    <Form ref={refForm}>
      <div>{JSON.stringify(filterState)}</div>
      <Accordion>
        <Card>
          <Card.Header className="d-flex flex-row justify-content-between align-items-center">
            <h3 className="text-primary">Select filter</h3>
            <div>
              <Accordion.Toggle
                className="mx-2"
                as={Button}
                eventKey={FilterTypes.COMPONENTS}
                size="lg"
              >
                Components
              </Accordion.Toggle>
              <Accordion.Toggle
                className="mx-2"
                as={Button}
                eventKey={FilterTypes.STATES}
                size="lg"
              >
                States
              </Accordion.Toggle>
              <Accordion.Toggle
                className="mx-2"
                as={Button}
                eventKey={FilterTypes.DATES}
                size="lg"
              >
                Dates
              </Accordion.Toggle>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey={FilterTypes.COMPONENTS}>
            <Card.Body>
              <MultipleChoseForm
                controlId="components"
                options={componentsOptions}
                label="Select components"
                setField={setComponents}
                field={components}
              />
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey={FilterTypes.STATES}>
            <Card.Body>
              <MultipleChoseForm
                controlId="states"
                options={statesOptions}
                label="Select states"
                setField={setStates}
                field={states}
              />
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey={FilterTypes.DATES}>
            <Card.Body>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Form>
  );
}

const componentsOptions: MultipleChoseFormProps["options"] = Object.values(
  EventComponentType
).map((value) => ({
  text: value,
  value,
  id: value,
  color: eventStateTypeColor[value as EventComponentType][EventStateType.ON],
}));

const statesOptions: MultipleChoseFormProps["options"] = Object.values(
  EventStateType
).map((value) => ({
  text: value,
  value,
  id: value,
}));

function Commander() {
  const [eventCommanderRangeList, loading, error] = useEventCommanderRange();

  const series = selectorGetSeries(eventCommanderRangeList);
  return (
    <div className="Commander">
      <h1>Commander: {series[0].title}</h1>
      <Card className="m-3">
        <div>
          Filters:
          <Filters />
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
