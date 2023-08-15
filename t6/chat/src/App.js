import TagContainer from "./Component/Tag/TagContainer";
import WindowContainer from "./Component/Window/WindowContainer";

import  "./Component/style.css";
function App() {
  return (
    
    <div className='container-fluid row justify-content-md-center"'>

        <TagContainer />
         <WindowContainer />
       
    </div>
  );
}

export default App;
