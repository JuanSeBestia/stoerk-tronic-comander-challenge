import _ from "lodash";
import { ReactNode } from "react";
import { Card, Form } from "react-bootstrap";

export function toggleItem<T>(list: T[], item: T) {
  const elementInList = list.find((itemList) => _.isEqual(item, itemList));
  if (!!elementInList) {
    return list.filter((itemList) => itemList !== elementInList);
  }
  return [...list, item];
}

export function hasItem<T>(list: T[], item: T) {
  const elementInList = list.find((itemList) => _.isEqual(item, itemList));
  return !!elementInList;
}

export interface MultipleChoseFormProps {
  label?: ReactNode;
  controlId: string;
  options: { text: ReactNode; value: any; id: string; color?: string }[];
  field: string[];
  setField: (list: string[]) => void;
}

function MultipleChoseForm({
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
export default MultipleChoseForm;
