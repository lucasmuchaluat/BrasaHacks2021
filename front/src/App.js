// dependecies
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// pages
import SideTab from './views/navigation/sidebar/index'
import Header from './views/navigation/header/index'
import Marketplace from './pages/Marketplace';
import Catalogs from './pages/Catalogs';
import Profile from './pages/Profile';
import Avon from './pages/Avon';

function App() {
  return (
    <div style={{ fontFamily: 'Lato' }}>
      <Router>
        <Header />
        <div style={{ display: 'flex' }}>
          <SideTab />
          <Route path="/marketplace" component={Marketplace} />
          <Route exact path="/catalogs" component={Catalogs} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/avon" component={Avon} />
        </div>
      </Router>
    </div>
  );
}

export default App;
