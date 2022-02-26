import './App.css';
import {useState} from 'react';
import QuoteBox from './component/QuoteBox';
import quotes from './quotes.json';

const getRandom = () => Math.floor(Math.random()* quotes.length);

const App = () => {
  const colors = ['#845EC2', '#FFC75F', '#4D8076', '#00C9A7', '#936C00', '#009EFA'];
  const [user, setSelectedUser]= useState(quotes[getRandom()]);
  const changeUser = () => setSelectedUser(quotes[getRandom()]);

let color = colors[Math.floor(Math.random()* 6)];
    document.body.style = `background: ${color}`;

  return (
    <div className="App">
      <QuoteBox  
      color={color}
      sentence={user.quote}
      name={user.author}
      condition={changeUser}
      />
    </div>
  );
}

export default App;
