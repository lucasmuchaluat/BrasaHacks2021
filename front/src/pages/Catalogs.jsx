// import...

import Catalog from "../views/catalog/catalogs";
import Container from '../components/container/index'
import CatalogHeader from "../views/catalog/catalog-header";

const Catalogs = () => {
  return (
    <Container>
      <CatalogHeader />
      <Catalog />
    </Container>
  )
};

export default Catalogs;