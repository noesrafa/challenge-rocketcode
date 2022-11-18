import React, { useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import ProgressBar from "./components/ProgressBar";
import Forms from "./components/form/Forms";

function App() {
  const [progress, setProgress] = useState('0%');

  return (
    <StyledApp className="App">
      <div className="container">
        <Header />
        <ProgressBar
          progress={progress}
        />
        <div className="inputsWrapper">
          <Forms setProgress={setProgress} progress={progress}/>
        </div>
      </div>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  .container {
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
  }
  .inputsWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 860px;
    margin: 0 auto;
    margin-top: 30px;
  }
`;
