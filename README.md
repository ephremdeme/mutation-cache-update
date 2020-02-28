# mutation-cache-update
>Very simple and small hook that can be used for updating local the cache while performing Apollo client add and delete mutation.  

[![NPM](https://img.shields.io/npm/v/mutation-cache-update.svg)](https://www.npmjs.com/package/mutation-cache-update) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mutation-cache-update
```

## Usage

```jsx
import React from 'react'
import { useAddMutation, Loading } from 'mutation-cache-update'
import { gql } from 'apollo-boost';

const GET_TODOS = gql`
  query GetTodos {
    todos
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const App = () => {
  const [addTodo, { error, loading, data }] = useAddMutation(
    ADD_TODO,
    GET_TODOS,
    'add_todo'/* mutation method name */,
    'get_todos' /* query method name */
  )

  
  if(loading) return <Loading>
  let input
  return (
    <div>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            addTodo({ variables: { type: input.value } })
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    </div>
  )
}
export default App

```

> to perform delete mutation

``` jsx
import { useDeleteMutation, Loading } from 'mutation-cache-update'

  const [deleteTodo, { error, loading, data }] = useDeleteMutation(
      DELETE_TODOS,
      GET_TODOS,
      'delete_todos'/* mutation method name */,
      'get_todos' /* query method name */
    )

    deleteTodo({
      variables : id
    })

```

> Loading indicator spinner

``` jsx
  if(loading) return <Loading/>
```

## License

MIT © [ephremdeme](https://github.com/ephremdeme)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
