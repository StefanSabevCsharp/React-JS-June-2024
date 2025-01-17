
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
import EditItem from './components/edit/EditItem';
import NotFound from './components/not-found/NotFound';
import { AuthProvider } from './context/authContext';
import Delete from './components/delete/Delete';
import { PhotoProvider } from './context/photoContext';
import PrivateGuard from './guards/PrivateGuard';




function App() {

    return (
        <AuthProvider>
            <PhotoProvider>
                <div className="bg-blueGray-200 min-h-screen">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/catalog/:_id" element={<SingleProduct />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<NotFound />} />
                        <Route element={<PrivateGuard />}>
                            <Route path="/create" element={<Create />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/edit/:_id" element={<EditItem />} />
                            <Route path="/delete/:_id" element={<Delete />} />
                        </Route>
                    </Routes>
                    <Footer />
                </div>
            </PhotoProvider>
        </AuthProvider>
    );
}

export default App;