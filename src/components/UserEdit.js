import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit a Product' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit