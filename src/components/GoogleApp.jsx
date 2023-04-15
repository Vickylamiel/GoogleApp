import Header from './HeaderComponents/Header';
import SearchSection from './SearchComponents/SearchSection';
import Footer from './FooterComponents/Footer';
import "../assets/styles/googleApp.css";


const GoogleApp = () => {
    return (
        <div className='google_app'>
            <Header/>
            <SearchSection/>
            <Footer/>
        </div>
    )
}

export default GoogleApp;