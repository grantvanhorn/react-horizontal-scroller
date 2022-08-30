import React, { ReactElement } from 'react';
import styled from 'styled-components';
import HorizontalScrollContainer from './HorizontalScrollContainer';

const wideUrls: Array<string> = [
  // put your images here
];

const tallUrls: Array<string> = [
  // put your images here
];

function App() {
  const wideImagesDom: Array<ReactElement> = wideUrls.map(imageUrl => (
    <WideImage
      key={imageUrl}
      src={imageUrl}
    />
  ));

  const tallImagesDom: Array<ReactElement> = tallUrls.map(imageUrl => (
    <TallImage
      key={imageUrl}
      src={imageUrl}
    />
  ));

  return (
    <div className="App">
      <HorizontalScrollContainer>
        {wideImagesDom}
      </HorizontalScrollContainer>
      <HorizontalScrollContainer>
        {tallImagesDom}
      </HorizontalScrollContainer>
    </div>
  );
}

export default App;

const WideImage = styled.img`
  height: 400px;
  width: 600px;
  border-radius: 10px;
  border: 1px solid black;
  margin-left: 10px;
  margin-right: 10px;
`;

const TallImage = styled.img`
  height: 600px;
  width: 400px;
  border-radius: 10px;
  border: 1px solid black;
  margin-left: 10px;
  margin-right: 10px;
`;
