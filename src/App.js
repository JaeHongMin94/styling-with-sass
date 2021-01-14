import React, { useState } from 'react';
import Button from './components/Button';
import './App.scss';
import CheckBox from './components/CheckBox';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <>
      <div className='App'>
        <h2>SCSS를 이용한 styling</h2>
        <div className='buttons'>
          <Button size='large'>BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size='small'>BUTTON</Button>
        </div>
        <div className='buttons'>
          <Button color='gray' size='large'>
            BUTTON
          </Button>
          <Button color='gray'>BUTTON</Button>
          <Button color='gray' size='small'>
            BUTTON
          </Button>
        </div>
        <div className='buttons'>
          <Button color='pink' size='large'>
            BUTTON
          </Button>
          <Button color='pink'>BUTTON</Button>
          <Button color='pink' size='small'>
            BUTTON
          </Button>
        </div>
        <div className='buttons'>
          <Button size='large' outline>
            BUTTON
          </Button>
          <Button color='gray' outline>
            BUTTON
          </Button>
          <Button color='pink' size='small' outline>
            BUTTON
          </Button>
        </div>
        <div className='buttons'>
          <Button size='large' fullWidth>
            BUTTON
          </Button>
          <Button size='large' color='gray' fullWidth>
            BUTTON
          </Button>
          <Button
            size='large'
            color='pink'
            fullWidth
            onClick={() => {
              console.log('클릭!');
            }}
            onMouseMove={() => {
              console.log('마우스무브!');
            }}
          >
            BUTTON
          </Button>
        </div>
      </div>
      <div className='App'>
        <h2>css-module을 이용한 styling</h2>
        <div>
          <CheckBox onChange={onChange} checked={check}>
            다음 약관에 모두 동의
          </CheckBox>
        </div>
      </div>
    </>
  );
}

export default App;
