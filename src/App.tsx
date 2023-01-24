import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div>
    <Accordion/>
    <Rating value = {3}/>
    <Rating value = {4}/>
    <PageTitle title = {'MyFriends'} />
    <PageTitle title = {'TITLE'} />
    </div>
  );
}

function PageTitle(props: any) {
  console.log('PageTitle rendering')
  return <h1>props.title</h1>
}

export default App;
