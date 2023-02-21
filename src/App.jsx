import { useSelector, useDispatch } from "react-redux";
import * as actions from "./state";
import { screens } from "./state/screen";

const buttonTitle = {
  mainMenu: "Main menu",
  editList: "Edit list",
  selectExercise: "Select exercise",
  exercise: "Exercise",
};

const App = () => {
  const dispatch = useDispatch();
  const screen = useSelector((state) => state.screen.screen);
  const buttons = screens
    .filter((x) => x != screen)
    .map((x) => (
      <div onClick={() => dispatch(actions[x]())}>{buttonTitle[x]}</div>
    ));
  return <>{buttons}</>;
};

export default App;
