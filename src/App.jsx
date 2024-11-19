import './App.css'
import Login from "./Components/login"
import Profile from "./Components/Profile"
import UserContextProvider from "./Context/UserContextProvider"


function App() {

  return (
   <UserContextProvider>
   <h1 className='bg-pink-500 text-white'>context API in react</h1>
    <Login />
    <Profile />
   </UserContextProvider>
  )
}

export default App
