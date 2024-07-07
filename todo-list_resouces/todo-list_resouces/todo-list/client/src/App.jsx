import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/TodoList";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <ToDoList />
            </main>
            <Footer />
        </>
    );
}

export default App;
