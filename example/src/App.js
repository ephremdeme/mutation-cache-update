import React from 'react'
import { useMyHook } from 'use-add-mutation-update'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App