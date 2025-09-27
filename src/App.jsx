import './App.css'
import LayOut from './components/LayOut'
import SideBar from './components/SideBar'

function App() {
  
  return (
    <>
     <div className="flex min-h-screen">
      <SideBar />
      <main className="flex-1 bg-gray-100 p-6"> 
      </main>
    </div>
    </>
  )
}

export default App
