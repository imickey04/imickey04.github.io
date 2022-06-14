import React, { useContext } from 'react';

// Components:-
import Intro from './components/introduction/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';

const App = () => {

  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "#fff", color: darkMode && "#fff", }} >
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
    </div>
  )
}

export default App;