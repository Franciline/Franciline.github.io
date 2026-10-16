import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
    AcademicProject,
  About,
  Contact,
  Navigation,
  Footer,
} from "./components";
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [isAboutPage, setIsAboutPage] = useState<boolean>(false);

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        const handleHashChange = () => setIsAboutPage(window.location.hash === '#/about');
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = isAboutPage ? 'About me | Amélie Chu' : 'Amélie Chu';
      }, [isAboutPage]);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange} isAboutPage={isAboutPage}/>
        {isAboutPage ? (
            <About />
        ) : (
            <div>
                <Main/>
                <AcademicProject mode={mode}/>
                <Expertise/>
                <Timeline/>
                <Contact/>
            </div>
        )}
        <Footer />
    </div>
    );
}

export default App;
