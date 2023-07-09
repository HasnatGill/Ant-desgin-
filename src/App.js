import './Apps.scss'
import Routes from '../src/pages/Routes'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}

export default App
