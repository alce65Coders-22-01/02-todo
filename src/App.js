import './app.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/core/header';
import { Footer } from './components/core/footer';
import { ToDo } from './components/todo/todo';
import { GentlemenPage } from './components/gent/Gentlemen.Page';
import { About } from './components/about/about';

export function App() {
    const title = 'TODO List';
    const author = title ? 'Alejandro' : '';
    const brand = 'ISDI Coders';
    const menuOptions = [
        { path: '/home', label: 'Inicio' },
        { path: '/gents', label: 'Gentelmans' },
        { path: '/about', label: 'Nosotros' },
    ];
    return (
        <div className="app">
            <Header mainTitle={title} menuOptions={menuOptions}>
                Esta es mi aplicación en React
            </Header>
            <main className="app-main">
                <Routes>
                    {/* Antes Switch */}
                    <Route path="/" element={<ToDo />} />
                    <Route path="/home" element={<ToDo />}></Route>
                    <Route
                        path="/gents"
                        element={<GentlemenPage></GentlemenPage>}
                    />
                    <Route path="/about" element={<About></About>} />
                    <Route path="*" element={<ToDo />} />
                </Routes>
            </main>
            <Footer author={author.toUpperCase()} brand={brand}></Footer>
        </div>
    );
}
