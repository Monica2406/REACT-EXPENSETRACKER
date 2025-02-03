import React from 'react'
import Menu from './Components/Menu'
import ExpenseTracker from './Pages/ExpenseTracker'

function App(props) {
  return(
    <div>
      <Menu />
      <ExpenseTracker />
    </div>
  )
}

export default App