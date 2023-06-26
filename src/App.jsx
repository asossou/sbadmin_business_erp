import Footer from "./components/Footer"
import HeaderNav from "./components/HeaderNav"
import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import './assets/css/styles.css'
import './assets/js/scripts.js'

function App() {


  return (
<div>
    <HeaderNav/>

    <div id="layoutSidenav">

    <div id="layoutSidenav_nav">

    <Sidebar/>

    </div>

    <div id="layoutSidenav_content">
      <MainContent/>

    <Footer/>

    </div>


    </div>
</div>

  )
}

export default App
