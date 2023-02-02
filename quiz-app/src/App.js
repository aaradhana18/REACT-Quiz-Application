import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import QandA from './Components/QandA/QandA';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='fw-bold fs-5 text-center'>Score: <span className='display-score'>0</span></div>
      <QandA />
      <Footer />
    </div>
  );
}

export default App;
