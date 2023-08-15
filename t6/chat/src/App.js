import TagContainer from "./Component/Tag/TagContainer";
import WindowContainer from "./Component/Window/WindowContainer";

function App() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <TagContainer />
        <WindowContainer />        
      </div>
    </div>
  );
}

export default App;
