import './App.css';
import TagContainer from './Component/Tag/TagContainer';
import WindowContainer from './Component/Window/WindowContainer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='container'>
      <div className='row'>
      <TagContainer/>
        <WindowContainer/>
      </div>
    </div>
  );
}

export default App;
