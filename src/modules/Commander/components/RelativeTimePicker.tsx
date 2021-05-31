import React, { ReactNode } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { FilterState } from "../models/filters";

export interface RelativeTimePickerProps {
  labelFrom?: ReactNode;
  labelTo?: ReactNode;
  controlId: string;
  field: FilterState["dates"];
  setField: (state: FilterState["dates"]) => void;
}

function RelativeTimePicker({
  controlId = "RelativeTimePicker",
  field,
  setField,
}: RelativeTimePickerProps) {
  const setRelative = (relative: FilterState["dates"]["relative"]) =>
    setField({ ...field, relative });
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRelative(event.target.value as FilterState["dates"]["relative"]);
  };
  return (
    <FormControl variant="outlined" className="w-100">
      <InputLabel id={`${controlId}-label`}>Date</InputLabel>
      <Select
        labelId={`${controlId}-label`}
        id={`${controlId}`}
        value={field}
        onChange={handleChange}
        label="Date ago"
      >
        <MenuItem value={"hour"}>Hour ago</MenuItem>
        <MenuItem value={"day"}>24 hours</MenuItem>
        <MenuItem value={"week"}>Week ago</MenuItem>
        <MenuItem value={"month"}>Month ago</MenuItem>
      </Select>
    </FormControl>
  );
}
export default RelativeTimePicker;
