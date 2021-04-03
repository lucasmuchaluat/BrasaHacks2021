import Container from '../components/container/index'
import AvonHeader from '../views/avon/avon-header/index'
import AvonItems from '../views/avon/avon-items/index'

const Avon = () => {
  return (
    <Container>
      <AvonHeader />
      <AvonItems />
    </Container>
  )
}

export default Avon;