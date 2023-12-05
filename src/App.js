import './App.css';
import Burger from './components/burger/burger';
import MyNavbar from './components/navbar/navbar'
function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <div className="BurgerBody">
        <Burger/>
      </div>
    </div>
  );
}

export default App;
