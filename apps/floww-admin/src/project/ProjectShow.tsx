import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="deleted" source="deleted" />
        <TextField label="ID" source="id" />
        <TextField label="project_desc" source="projectDesc" />
        <TextField label="project_name" source="projectName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
