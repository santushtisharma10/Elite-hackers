import './App.css';

function App() {

  const handleSubmit = (e) => {

    e.preventDefault();
    
  }
  return (
    <div className="App">
      Elite hackers
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  );
}

export default App;
