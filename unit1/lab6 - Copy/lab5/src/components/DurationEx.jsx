import Timer from "./Timer";

export default function DurationEx({ exercise, setMenuScreen }) {
    let { name } = exercise;
    /*let please = setCurrentScreen(MENU_SCREEN);*/
    return (
      <div>
        <p>{name}</p>
        <Timer />
        <button onClick={() => setMenuScreen()}>Return</button>
      </div>
    );
  }