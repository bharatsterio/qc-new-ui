import './App.css';
import Chatbox from './components/ChatBox/chatbox';
import Header from './components/Header/header';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Place body content here */}
        <Chatbox />
      </main>
    </>
  );
}

export default App;
