import "./App.css";
import Card from "./components/Card";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <div className="bg-[#fefce8] h-[100vh]">
        <div className="text-center">Masai Notes</div>
        <Notes />
        <Card />
      </div>
    </>
  );
}

export default App;
