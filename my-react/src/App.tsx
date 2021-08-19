import React, { useState, useEffect } from 'react'
import logo from './square.svg'
import axios from 'axios'
import './App.css'

function App(): JSX.Element {
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get('api/v1/hello').then((res) => setData(res.data.message))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>my data</h2>
          <h5>{data ? data : '...loading'}</h5>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
