
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import CarouselPets from './components/CarouselPets';

function App() {
  return <div>
    <Navbar />
    <section class="firstSection">
    <h1>"If you can see it in your mind, You can hold it in your hand"</h1>

     

    </section>
    <Carousel />
    
    <section class="secondSection">
      <h1>"It feels good to be lost in the right direction"</h1>
    </section>

    <CarouselPets />
    <section class="thirdSection">
      
    </section>

  </div>
}

export default App;
