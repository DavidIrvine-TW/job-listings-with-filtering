import Header from "./components/Header";
import List from "./components/List";
import Tags from "./components/Tags";

function App() {
  return (
    <div className="wrapper max-w-[1440px] border border-ddcyan mx-auto">
      <Header />
      <main className="px-[2.5rem]">
        <Tags />
        <List />
      </main>
    </div>
  );
}

export default App;
