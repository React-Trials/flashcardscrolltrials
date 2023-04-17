import { Button, FormControl, MenuItem, Select } from "@mui/material";
import Flashcard from "./Flashcard";
import Carousel from 'react-material-ui-carousel';
import { useState } from "react";

function App() {
  const [dropdownValue, setDropdownValue] = useState("All");

  function handleChange(e) {
    setDropdownValue(e.target.value)
}

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

  let categories = ["Category 1", "Category 2", "Category 3"]

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Flashcard
        </p>

        <div className="dropdownContainerDiv" style={{display: "flex"}}>
            <div className="dropdown">
                <FormControl sx={{width: "200px"}}>
                    <Select value={dropdownValue} 
                            onChange={(e) => handleChange(e)}>
                        <MenuItem value="All">All</MenuItem>
                        {
                            categories.map((category) => {
                                return (
                                    <MenuItem value={category}>{category}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
            </div>
            <Button variant="contained" 
                sx={{ 
                    backgroundColor: "#41ADA4",
                    ':hover': {
                        bgcolor: '#41ADA4'
                    }
                }}>Search</Button>
            
        </div>
        
        <div sx={{width: "600px"}}>
          <Carousel swipe={false}
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
