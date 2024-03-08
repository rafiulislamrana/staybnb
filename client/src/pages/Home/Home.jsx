import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"

const Home = () => {
  return (
    <div>
      {/* Categories Section */}
      <Container>
        <Categories></Categories> 
      </Container>
      {/* Rooms Card Section */}
      <Rooms></Rooms>
    </div>
  )
}

export default Home
