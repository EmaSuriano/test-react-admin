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
import React from 'react';

export const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="Search by name" source="name_contains" />
  </Filter>
);

export const UserList = props => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="name" />
      <ReferenceManyField
        label="Posts made"
        reference="Post"
        target="author.id"
      >
        <SingleFieldList>
          <ChipField source="title" />
        </SingleFieldList>
      </ReferenceManyField>
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const UserEdit = props => (
  <Edit title="Edit a user" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceArrayInput
        label="Posts made"
        reference="Post"
        source="postsIds"
      >
        <SelectArrayInput optionText="title" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export const UserShow = props => (
  <Show title="Show a brand" {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = props => (
  <Create title="Create an user" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceArrayInput
        label="Posts made"
        reference="Post"
        source="postsIds"
      >
        <SelectArrayInput optionText="title" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);

export default {
  list: UserList,
  // edit: UserEdit,
  // show: UserShow,
  // create: UserCreate,
};
