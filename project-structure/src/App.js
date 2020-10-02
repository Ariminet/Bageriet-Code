import React from 'react';
import Footer from './Assets/Layout/Footer';
import Header from './Assets/Layout/Header';
import Main from './Assets/Layout/Main';
import { ImageProvider } from './Context/ImageContext';
import { LoggedInProvider } from './Context/LoggedInContext';
import { UserProvider } from './Context/user/UserContext';

function App() {
  return (
    <UserProvider>
      <LoggedInProvider>
        <ImageProvider>
          <div className="App">
            <Header />
            <Main />
            <Footer />
          </div>
        </ImageProvider>
      </LoggedInProvider>
    </UserProvider>
  );
}

export default App;
