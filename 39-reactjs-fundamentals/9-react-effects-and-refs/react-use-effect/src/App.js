import Timer from './Timer';
import Counter from './Counter';
import ProfileViewer from './ProfileViewer';
import ProfileViewerWithSearch from './ProfileViewerWithSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ProfileViewer name='elie'/> */}
      <ProfileViewerWithSearch />
    </div>
  );
}

export default App;
