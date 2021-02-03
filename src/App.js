import React from 'react';
import Chat from './components/Chat';
import Auth from './Auth';
import LoginPage from './components/LoginPage';
import LogoutLink from './components/LogoutLink';

function App() {
  // 分かりやすいように'margin: 50px'を適用しています。//
  return (
    <div className="App" style={{ margin: 50 }}> 
      <Auth>      
        {/* ログインしていたら */}
        {(authInfo) => {
          if (authInfo.isLoggedIn) {
            const { me, logout } = authInfo;
            console.log(authInfo);
            return  (
              <>
                <LogoutLink me={me} logout={logout} /> 
                <Chat />
              </>
           )
          // ログアウトしていたら
          } else {
            const { login } = authInfo;
            console.log(authInfo);
            return <LoginPage login={login} />
          }
        }}  
      </Auth>   
    </div>
  );
}

export default App;
