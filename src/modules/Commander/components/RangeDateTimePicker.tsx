import React, { ReactNode } from "react";
import { TextField } from "@material-ui/core";
import moment, { Moment } from "moment";

export interface RangeDateTimePickerProps {
  labelFrom?: ReactNode;
  labelTo?: ReactNode;
  controlId: string;
  field: { from: Moment; to: Moment };
  setField: (state: { from: Moment; to: Moment }) => void;
}

function RangeDateTimePicker({
  controlId,
  field,
  setField,
  labelFrom,
  labelTo,
}: RangeDateTimePickerProps) {
  const setFrom = (from: string) => setField({ ...field, from: moment(from) });
  const setTo = (to: string) => setField({ ...field, to: moment(to) });
  return (
    <>
      <TextField
        id={`${controlId}-from`}
        label={labelFrom}
        type="datetime-local"
        value={field.from.toISOString().split(".")[0]}
        onChange={(e) => setFrom(e.target.value)}
        variant="outlined"
        className="mx-3"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id={`${controlId}-from`}
        label={labelTo}
        type="datetime-local"
        value={field.to.toISOString().split(".")[0]}
        onChange={(e) => setTo(e.target.value)}
        variant="outlined"
        className="mx-3"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  );
}
export default RangeDateTimePicker;
