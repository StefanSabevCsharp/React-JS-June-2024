
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/hero-section/Header';
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import Search from './components/search/Search';
import Create from './components/create/Create';
import About from './components/about/About';
import Profile from './components/profile/Profile';
import Login from './components/auth/Login';
import SingleProduct from './components/catalog/SingleProduct';
import Register from './components/auth/Register';

function App() {
    return (
        <div className="bg-blueGray-200 min-h-screen">
            
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:_id" element={<SingleProduct />} />
                <Route path="/search" element={<Search />} />
                <Route path="/create" element={<Create />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element= {<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="*" element={<SingleProduct />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;