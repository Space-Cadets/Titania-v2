import React from 'react'
import Header from '../shared/Header.react.js'
import SearchContainer from '../../containers/SearchContainer.react.js'

const Dashboard = () => (
  <div>
    <Header />
    <div className="contentContainer">
      <h1>Dashboard</h1>
      <SearchContainer />
    </div>
  </div>
)

export default Dashboard
