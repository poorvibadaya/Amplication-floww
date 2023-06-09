import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ProjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"projects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="deleted" source="deleted" />
        <TextField label="ID" source="id" />
        <TextField label="project_desc" source="projectDesc" />
        <TextField label="project_name" source="projectName" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
