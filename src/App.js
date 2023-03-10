import React from 'react';
import './App.css';
import {logDOM} from "@testing-library/react";
import Button from "./Button";

function App() {

  return (
      <>
      <h1>Handbags & Purses</h1>
        <nav>
            <Button message={"to the collection"} disabled={false} content={"To the collection"}/>
            <Button message={"shop all bags"} disabled={false} content={"shop all bags"}/>
            <Button message={"pre-orders"} disabled={true} content={"pre-orders"} />
        </nav>
          <main>
              <article><span><img src="" alt=""/><p></p><h4></h4></span></article>
              <article><span><img src="" alt=""/><p></p><h4></h4></span></article>
              <article><span><img src="" alt=""/><p></p><h4></h4></span></article>
              <article><span><img src="" alt=""/><p></p><h4></h4></span></article>

          </main>
      </>
  );


}


export default App;



