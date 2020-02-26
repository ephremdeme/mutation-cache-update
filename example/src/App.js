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
