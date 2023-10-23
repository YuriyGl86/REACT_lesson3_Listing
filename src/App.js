
import './App.css';
import { Listing } from './components/Listing'

const etsy = require('./db/etsy.json')


function App() {
  console.log(etsy)
  return (
    <Listing items={ etsy }/>
  );
}

export default App;
