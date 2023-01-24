import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div>
    <PageTitle title = {'MyFriends'} />
    <PageTitle title = {'TITLE'} />
    <Accordion title = {true}/>
    <Rating value = {3}/>
    <Accordion title = {false}/>
    <Rating value = {4}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
}

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle rendering')
  return <h1>{props.title}</h1>
}

export default App;
