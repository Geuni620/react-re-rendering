const Component1 = () => {
  console.log('Rendering Component 1');
  return (
    <div>
      <Component2 />
      <Component3 />
    </div>
  );
};

const Component2 = () => {
  console.log('Rendering Component 2');
  return (
    <div>
      <Component4 />
      <Component5 />
    </div>
  );
};

const Component3 = () => {
  console.log('Rendering Component 3');
  return <div>Component 3</div>;
};

const Component4 = () => {
  console.log('Rendering Component 4');
  return (
    <div>
      <Component6 />
      <Component7 />
    </div>
  );
};

const Component5 = () => {
  console.log('Rendering Component 5');
  return (
    <div>
      <Component8 />
      <Component9 />
    </div>
  );
};

const Component6 = () => {
  console.log('Rendering Component 6');
  return <div>Component 6</div>;
};

const Component7 = () => {
  console.log('Rendering Component 7');
  return <div>Component 7</div>;
};

const Component8 = () => {
  console.log('Rendering Component 8');
  return <div>Component 8</div>;
};

const Component9 = () => {
  console.log('Rendering Component 9');
  return <div>Component 9</div>;
};

export const App = () => {
  console.log('Rendering App');
  return (
    <div>
      <Component1 />
    </div>
  );
};
