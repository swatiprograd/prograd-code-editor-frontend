import { useState } from "react";
import "./App.css"
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import SubMenu from "./components/SubMenu";

function App() {

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }

        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }

    return (
        <>
            <Navbar toggleMode={toggleMode} />
            <SubMenu />
            <MainContent />
        </>
    )
}

export default App;