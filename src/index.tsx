import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'normalize.css'
import './index.css'

import App from './components/App'

const root = document.getElementById('app')
render(
  <Router>
    <App />
  </Router>,
  root
)
