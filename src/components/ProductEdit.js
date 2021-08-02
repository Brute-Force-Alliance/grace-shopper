import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'

const ProductEdit = (props) => {
  return (
    <Edit title='Edit a Product' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput source='description' />
        <TextInput source='type' />
        <TextInput source='imageUrl' />
        <NumberInput source='price' />
        <NumberInput source='rating' />
      </SimpleForm>
    </Edit>
  )
}

export default ProductEdit