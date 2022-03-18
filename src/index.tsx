import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import ErrorBoundary from './components/errorBoundary'

ReactDOM.render(
  <Router>
    <RecoilRoot>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </RecoilRoot>
  </Router>,
  document.getElementById('root')
)
