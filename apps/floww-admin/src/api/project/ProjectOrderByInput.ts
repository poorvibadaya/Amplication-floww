import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  deleted?: SortOrder;
  id?: SortOrder;
  projectDesc?: SortOrder;
  projectName?: SortOrder;
  updatedAt?: SortOrder;
};
