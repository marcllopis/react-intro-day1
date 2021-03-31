import Content from './components/Content'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/Header'

import './App.css';


const mySections = ['Home', 'About', 'Projects', 'Contact']


function App() {
  return (
    <div className="App">
      <Navbar sections={mySections}/>
      <Header title='football stuff' subtitle='barcelona lost' />
      <Content />
      <Header title='tv stuff' subtitle='weird tv things'/>
      <Content />
      <Footer />
    </div >
  );
}

export default App;
