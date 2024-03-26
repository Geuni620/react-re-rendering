import { useState } from 'react';
import { Button } from 'src/components/ui/button';

export const App = () => {
  console.log('Rendering App');
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      App
      <Component1 />
    </div>
  );
};

const Component1 = () => {
  console.log('Rendering Component 1');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      Component 1
      <Component2 />
      <Component3 />
    </div>
  );
};

const Component2 = () => {
  const [count, setCount] = useState(0);
  console.log('Rendering Component 2');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      Component 2
      <Button className="ml-5" onClick={() => setCount(count + 1)}>
        Rerender Component 2 (Count: {count})
      </Button>
      <Component4 />
      <Component5 />
    </div>
  );
};

const Component3 = () => {
  console.log('Rendering Component 3');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      Component 3
    </div>
  );
};

const Component4 = () => {
  console.log('Rendering Component 4');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      Component 4
      <Component6 />
      <Component7 />
    </div>
  );
};

const Component5 = () => {
  console.log('Rendering Component 5');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      Component 5
      <Component8 />
      <Component9 />
    </div>
  );
};

const Component6 = () => {
  console.log('Rendering Component 6');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      Component 6
    </div>
  );
};

const Component7 = () => {
  console.log('Rendering Component 7');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      Component 7
    </div>
  );
};

const Component8 = () => {
  console.log('Rendering Component 8');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      Component 8
    </div>
  );
};

const Component9 = () => {
  console.log('Rendering Component 9');
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      Component 9
    </div>
  );
};
