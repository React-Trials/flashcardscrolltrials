import Flashcard from "./Flashcard";
import Carousel from 'react-material-ui-carousel';

function App() {

  let flashcards = [{
    question: "Question 1",
    answer: "hello \n hello \n hello \n hello \n hello \n hello \n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello"
  },
  {
    question: "Question 2",
    answer: "hello \n hello \n hello \n hello \n hello \n hello \n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello"
  },
  {
    question: "Question 3",
    answer: "hello \n hello \n hello \n hello \n hello \n hello \n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello\n hello"
  }]

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Flashcard
        </p>
        
        <div sx={{width: "600px"}}>
          <Carousel swipe={true}
                    autoPlay={false}
                    animation="slide"
                    height={"300px"}
                    sx={{p: "10px 3px 0px", width: "100%", maxWidth: "600px"}}
                    >
            {
              flashcards.map((flashcard) => {
                return (
                  <Flashcard flashcard={flashcard}/>
                )
              })
            }
          </Carousel>
        </div>
        

        
        
      </header>
    </div>
  );
}

export default App;
