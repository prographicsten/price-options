
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import PropTypes from 'prop-types';


function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
    </>
  )
}

App.PropTypes = {
  NavBar: PropTypes.any.isRequired,
}

export default App
