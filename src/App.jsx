import './App.css';
import Header from './components/Header'
import FirstBox from './components/FirstBox'
import Container from '@mui/material/Container';
import TotalActivity from './components/TotalActivity';
import WhoWeAre from './components/WhoWeAre';
import OurTeam from './components/ourTeam';
import QuestionsSide from './components/QuestionsSide';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Service from './components/Service';

function App() {

  return (
    <Container style={{position: 'relative'}}>
      <Header />
      <FirstBox />
      <TotalActivity />
      <WhoWeAre />
      <OurTeam />
      <Service />
      <QuestionsSide />
      <SocialMedia />
      <Contact />
      <Footer />

    </Container>
  )
}

export default App
