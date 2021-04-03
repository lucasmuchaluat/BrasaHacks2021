// dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// styles and views
import Container from '../components/container/index';
import IntroSection from '../views/marketplace/intro-section/index';
import CompanyList from '../views/marketplace/company-list/index';
import Avon from './Avon';

const MarketplaceDefault = () => {
  return (
    <Container>
      <Router>
        <IntroSection />
        <CompanyList />
      </Router>
    </Container>
  )
}

const Marketplace = () => {
  return (
    <Router>
      {/* <Switch> */}
        <Route exact path="/marketplace" component={MarketplaceDefault} />
        <Route  path="/marketplace/avon" component={Avon} />
      {/* </Switch> */}
    </Router>
  );
}

export default Marketplace;