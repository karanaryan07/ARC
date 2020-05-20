import React from 'react';
import TopBar from './TopNavbar/NavBar.js'
import Dashboard from './Dashboard/Dashboard.js'

class App extends React.Component{
  render()
  {
    return(
      <div>
        <TopBar/>
        <Dashboard/>
      </div>
    )
  }
}


export default App;
