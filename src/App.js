import React ,{useState} from 'react';
import Login from './component/Login';
import AuthContext from './component/AuthContext';
import Home from './component/Home';
const App=()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loginHandler = () => {
        setIsLoggedIn(true);
      };

      const logoutHandler = () => {
        setIsLoggedIn(false);
      };

      return (
        <AuthContext.Provider
          value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
        >
         <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </AuthContext.Provider>
      )


}
export default App;