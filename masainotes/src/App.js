import "./App.css";
import Card from "./components/Card";
import MyNotes from "./components/MyNotes";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <div className="bg-[#fefce8] h-[100vh]">
        <div className="text-center">Masai Notes</div>

        <Notes />

        {/* <Card /> */}
        <div className="mt-[100px]">
          <MyNotes />
        </div>
      </div>
    </>
  );
}

export default App;
