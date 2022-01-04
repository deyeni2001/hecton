import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <Todo text='Make Breakfast' time='07:00 AM'/>
      <Todo text='Make Lunch' time='01:00 PM'/>
      <Todo text='Make Dinner' time='07:00 PM'/>
    </div>
  );
}

export default App;
