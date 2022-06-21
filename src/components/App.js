import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
