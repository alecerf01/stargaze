import HeroSection from '../../components/HeroSection';
import Search from '../../components/Search';
import Constellation from '../../components/Constellation';
import Wrapper from "../../components/Wrapper";
import constellations from "../../constellations.json";
import './style.css';
import R3fDemo from '../../components/threeFiber';

function Homepage() {
  return (
    <div>
      <div >
        <div className='hero-sec'>

          <HeroSection />
          <Search />

          <div className='threeD'>
            <R3fDemo> </R3fDemo>
          </div>

        </div>
      </div>
      <div style={{ width: "100%", height: "50vh", background: '#555555' }}>
        <R3fDemo ></R3fDemo></div>

      <div className='constellation-sec'>
        <p className='constellation-header'>6 constellations anyone can recognise</p>

        <Wrapper>
          {constellations.map(function (constellation) {
            return <Constellation
              key={constellation.id}
              name={constellation.name}
              image={constellation.image}
              site={constellation.site}
              description={constellation.description}
            />
          })}
        </Wrapper>
      </div>

    </div>
  )
}

//https://www.youtube.com/watch?v=DPl34H2ISsk&t=89s INFLUENCE / HELP 

export default Homepage