import Header from "./components/Header"
import List from './components/List'
import Tags from "./components/Tags"

function App() {
 
  return (
    <>
    <Header/>
    <main className="px-[2.5rem]">
      <Tags/>
      <List/>
    </main>
    </>
  )
}

export default App
