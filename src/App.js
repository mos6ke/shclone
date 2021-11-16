// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Patners from './components/patners';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <>
    <Header />
    <Body />
    <Patners />
    <Footer />
    </>
    </div>
  );
}

export default App;
