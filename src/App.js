import Square from './Components/Square';
import Input from './Components/Input';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('');
  return (
    <div className='App'>
      <Square colorValue={colorValue} />
      <Input colorValue={colorValue} setColorValue={setColorValue} />
    </div>
  );
}

export default App;
