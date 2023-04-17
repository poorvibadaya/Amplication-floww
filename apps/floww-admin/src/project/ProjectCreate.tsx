import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="deleted" source="deleted" />
        <TextInput label="project_desc" multiline source="projectDesc" />
        <TextInput label="project_name" source="projectName" />
      </SimpleForm>
    </Create>
  );
};
