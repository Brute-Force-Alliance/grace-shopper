import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin'

const ProductCreate = (props) => {
  return (
    <Create title='Create a Product' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput source='description' />
        <TextInput source='type' />
        <TextInput source='imageUrl' />
        <NumberInput source='price' />
        <NumberInput source='rating' />
      </SimpleForm>
    </Create>
  )
}

export default ProductCreate
