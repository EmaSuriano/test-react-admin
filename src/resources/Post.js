// in App.js
import React from 'react';
import {
  Edit,
  List,
  Show,
  Create,
  ChipField,
  Datagrid,
  DisabledInput,
  EditButton,
  ReferenceManyField,
  ReferenceField,
  ShowButton,
  SimpleForm,
  SingleFieldList,
  TextField,
  TextInput,
  Filter,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberField,
  BooleanField,
  SelectInput,
  SimpleShowLayout,
  Resource,
} from 'react-admin';

export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" />
      <ReferenceField label="Author" source="author.id" reference="User">
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const UserCreate = props => (
  <Create title="Create a post" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <ReferenceInput reference="User" source="author.id">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default {
  list: PostList,
  create: UserCreate,
};
