import React from 'react'
import { List, 
Datagrid, 
TextField,
NumberField,
ImageField,
EditButton, 
DeleteButton
} from 'react-admin';

const ProductList = (props) => {
  return (
    <List {...props} title='List of products'>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='description' />
        <TextField source='type' />
        <NumberField source='rating' />
        <NumberField source='price' />
        <ImageField source='imageUrl' />
        <EditButton basePath='/products' />
        <DeleteButton basePath='/products' />
      </Datagrid>
    </List>
  )
}

export default ProductList
