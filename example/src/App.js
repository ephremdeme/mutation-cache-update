import React from 'react'
import { useAddMutation } from 'use-add-mutation-update'

const App = () => {
  const example = useAddMutation()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
