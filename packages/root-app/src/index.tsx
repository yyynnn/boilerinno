import 'core-js/stable'
import 'regenerator-runtime/runtime.js'
import 'date-time-format-timezone'
import React from 'react'
import { render } from 'react-dom'

import { App } from './App'

const Root: React.FC = () => <App />

render(<Root />, document.getElementById('root'))
