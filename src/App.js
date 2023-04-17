import Flashcard from "./Flashcard";

function App() {

  let flashcard = {
    question: "Question",
    answer: "hello \n hello \n hello \n hello \n hello \n hello \n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello"
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Flashcard
        </p>
        <Flashcard flashcard={flashcard}/>
      </header>
    </div>
  );
}

export default App;
