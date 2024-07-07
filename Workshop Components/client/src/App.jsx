import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UserContainer from "./components/user-container/UserContainer";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <UserContainer />
            </main>

            <Footer />
        </>
    );
}

export default App;
