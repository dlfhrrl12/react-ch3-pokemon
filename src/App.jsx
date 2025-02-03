import Router from './shared/Router'
import { AppContainerStyle } from './styled/AppStyle'

function App() {


  return (
    <>
    <AppContainerStyle />
    <div className='app-container'>
    <Router />
    </div>
    </>
  )
}

export default App
