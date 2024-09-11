import Navbar from "./componets/Navbar"
import Categories from "./componets/Categories"
import Ads from "./componets/ads"
import Recommended from "./componets/Recommended"
import Topic from "./componets/Topic"
import Popular from "./componets/Popular"
import Footer from "./componets/Footer"
function App(){
    return(
        <div>
        <Navbar></Navbar>
        <Categories></Categories>
        <Ads></Ads>
        <Recommended></Recommended>
        <Topic></Topic>
        <Popular></Popular>
        <Footer></Footer>
        </div>
    )
}
export default App