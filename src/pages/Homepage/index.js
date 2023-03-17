import HeroSection from '../../components/HeroSection';
import Search from '../../components/Search';
import Constellation from '../../components/Constellation';
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import constellations from "../../constellations.json";
import './style.css';



function Homepage() {
  return (
    <div className='bckg'>
      
      <div className='hero-sec'>
        <HeroSection />
        <Search />
      </div>

      <div className='constellation-sec'>
        <p className='constellation-header'>6 constellations anyone can recognise</p>

        <Wrapper>
          {constellations.map(function (constellation) {
            return <Constellation
              key={constellation.id}
              name={constellation.name}
              image={constellation.image}
              site={constellation.site} 
            />
          })}
        </Wrapper>
      </div>
      <Footer /> 
      

    </div>
  )
}

export default Homepage