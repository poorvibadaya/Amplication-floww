import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  deleted?: BooleanNullableFilter;
  id?: StringFilter;
  projectDesc?: StringFilter;
  projectName?: StringFilter;
};
