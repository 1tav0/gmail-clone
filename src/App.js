import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Mail from './Mail'
import EmailList from './EmailList'
import SendMail from './SendMail'
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice'
import { login, selectUser } from './features/userSlice';
import Login from './Login'
import { auth } from './firebase';

function App() {
  // clicking compose in the front end triggers a piece of state from the redux store
  //here we are able to grab info from the redux store in this case if we open the compose button 
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen) //what we created 
  const user = useSelector(selectUser)
  const dispatch = useDispatch(selectUser) 

  //this is to stay logged in 
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>
      {
        (!user ?
          <Login />
          :
          <div className="App">
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Routes>
                <Route path='/mail' element={<Mail />}/>
                <Route path='/' element={<EmailList />}/>
              </Routes>
            </div>
            {
              sendMessageIsOpen && <SendMail />
            }
          </div>
        )

      }
    </Router>
  );
}

export default App;

  
