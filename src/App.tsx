import { AboutMe } from './components/AboutMe';
import { Banner } from './components/Banner';
import { Loc } from './components/Loc';
import { SeekHelp } from './components/SeekHelp';
import { ServiceInf } from './components/ServiceInf';
import './styles/App.scss';

function App() {
  return (
    <section className='app'>
      <Banner/>
      <ServiceInf/>
      <SeekHelp/>
      <AboutMe/>
      <Loc/>
    </section>
  );
}

export default App;
