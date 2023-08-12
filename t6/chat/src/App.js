import './App.css';
import TagContainer from './Component/Tag/TagContainer';
import WindowContainer from './Component/Window/WindowContainer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='container'>
        <TagContainer/>
        <WindowContainer/>
    </div>
  );
}

export default App;
