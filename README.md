# use-add-mutation-update
>Very simple and small hook for managing  Apollo client add mutation with cache update 

[![NPM](https://img.shields.io/npm/v/use-add-mutation-update.svg)](https://www.npmjs.com/package/use-add-mutation-update) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-add-mutation-update
```

## Usage

```jsx
import React from 'react'
import { useAddMutation } from 'use-add-mutation-update'
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

## License

MIT © [ephremdeme](https://github.com/ephremdeme)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
