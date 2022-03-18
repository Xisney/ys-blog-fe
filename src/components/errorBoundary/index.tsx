import { Component } from 'react'
import ErrorTips from '@src/pages/components/errorTips'
import style from './style.module.less'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorTips className={style['errorBoundary-container']} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
