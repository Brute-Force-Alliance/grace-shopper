import React from 'react'
import { List, 
Datagrid,
TextField, 
EmailField,
EditButton, 
DeleteButton
} from 'react-admin';

const UserList = (props) => {
  return (
    <List {...props} title='List of users'>
      <Datagrid>
        <TextField source='id' />
        <EmailField source='email' />
        <EditButton basePath='/products' />
        <DeleteButton basePath='/products' />
      </Datagrid>
    </List>
  )
}

export default UserList