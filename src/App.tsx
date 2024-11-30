import { Banner } from './components/Banner';
import { SeekHelp } from './components/SeekHelp';
import { ServiceInf } from './components/ServiceInf';
import './styles/App.scss';

function App() {
  return (
    <section className='app'>
      <Banner/>
      <ServiceInf/>
      <SeekHelp/>
    </section>
  );
}

export default App;
