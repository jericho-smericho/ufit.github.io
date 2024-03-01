import "./App.css";
import React, { useCallback, useState } from "react";
import RepetitionEx from "./components/RepetitionEx";
import DurationEx from "./components/DurationEx";
import FailureEx from "./components/Failure";

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "Repetion";
const TOFAILURE_EXERCISE = "Failure";

let exerciseList = [
  { type: DURATION_EXERCISE, name: "Running" },
  { type: DURATION_EXERCISE, name: "Rowing" },
  { type: DURATION_EXERCISE, name: "Swimming" },
  { type: REPETITION_EXERCISE, name: "Push-ups" },
  { type: TOFAILURE_EXERCISE, name: "Bicep Curls" },
  { type: TOFAILURE_EXERCISE, name: "Lunges" },
  { type: TOFAILURE_EXERCISE, name: "Pull-ups" },
];

function App() {
  const [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  const [currentExercise, setCurrentExercise] = useState(null);
  let screenComp = undefined;
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  });

  if (currentScreen === MENU_SCREEN) {
    screenComp = (
      <div>
        <p>Exercise Menu</p>
        <ul>
          {exerciseList.map((exercise) => {
            return (
              <li key={exercise.name}>
                <button onClick={() => buttonClick(exercise)}>
                  {exercise.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch (currentExercise?.type) {
      case DURATION_EXERCISE:
        screenComp = (
          <DurationEx
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
            exercise={currentExercise}
          />
        );
        break;
      case REPETITION_EXERCISE:
        screenComp = (
          <RepetitionEx
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
            exercise={currentExercise}
          />
        );
        break;
      case TOFAILURE_EXERCISE:
        screenComp = (
          <FailureEx
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
            exercise={currentExercise}
          />
        );
        break;
      default:
        screenComp = undefined;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{screenComp}</p>
      </header>
    </div>
  );
}
<<<<<<< HEAD:unit1/lab6 - Copy/lab5/src/App.js
ReactDOM.render(
  <App/>, 
  document.getElementById("container")
  );
=======
>>>>>>> 9f802f2 (shes going somewhere):unit1/lab06/lab5/src/App.js
export default App;
