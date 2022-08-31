import Routes from './routes';
import Navigation from './components/navigation/navigation';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

const Logo = lazy(() => import('./images/desktop/logo.png'))

function App() {


  return (
    <Suspense fallback={<div className='suspense-load'><img alt='logo of DR' className='suspense-load--img' src={Logo} /></div>}>
      <Router> 
        <Navigation />
        <Routes>
         
        </Routes>
      </Router>

    </Suspense>

  );
}

export default App;
