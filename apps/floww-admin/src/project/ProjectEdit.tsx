import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="deleted" source="deleted" />
        <TextInput label="project_desc" multiline source="projectDesc" />
        <TextInput label="project_name" source="projectName" />
      </SimpleForm>
    </Edit>
  );
};
