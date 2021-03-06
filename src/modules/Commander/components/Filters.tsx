import _ from "lodash";
import { useRef } from "react";
import { Accordion, Button, Card, Form } from "react-bootstrap";

import { EventComponentType, EventStateType } from "../models/events";
import MultipleChoseForm, { MultipleChoseFormProps } from "./MultipleChoseForm";
import RangeDateTimePicker from "./RangeDateTimePicker";
import { FilterState } from "../models/filters";
import { COLORS } from "./Charts/chart.model";
import RelativeTimePicker from "./RelativeTimePicker";
export interface FilterProps {
  filterState: FilterState;
  setFilterState: (state: FilterState) => void;
  componentsOptions: MultipleChoseFormProps["options"];
}

export enum FilterTypes {
  COMPONENTS = "COMPONENTS",
  STATES = "STATES",
  DATES = "DATES",
}

function Filters({
  filterState,
  setFilterState,
  componentsOptions,
}: FilterProps) {
  const refForm = useRef<HTMLFormElement | null>(null);
  const { components, states, dates } = filterState;
  const setComponents = (components: string[]) =>
    setFilterState({ ...filterState, components });
  const setStates = (states: string[]) =>
    setFilterState({ ...filterState, states });
  const setDates = (dates: FilterState["dates"]) =>
    setFilterState({ ...filterState, dates });
  return (
    <Form ref={refForm}>
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
              {/* <RangeDateTimePicker
                controlId="dates"
                field={dates}
                setField={setDates}
                labelFrom="Start date"
                labelTo="Final date"
              /> */}
              <RelativeTimePicker
                controlId="relative-date"
                field={dates}
                setField={setDates}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Form>
  );
}
const statesOptions: MultipleChoseFormProps["options"] = Object.values(
  EventStateType
).map((value) => ({
  text: value,
  value,
  id: value,
}));
export default Filters;
