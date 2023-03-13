import React from 'react';
import './App.css';
import {logDOM} from "@testing-library/react";
import Button from "./Button";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import Products from "./Product";
import brand from "./assets/brand.png";
import Tile from "./Tile";
import out_story from "./assets/our_story.png";



function App() {

  return (
      <>
      <h1>Handbags & Purses</h1>
        <nav>
            <Button message={"to the collection"} disabled={false} content={"To the collection"}/>
            <Button message={"shop all bags"} disabled={false} content={"shop all bags"}/>
            <Button message={"pre-orders"} disabled={true} content={"pre-orders"} /></nav>

          <main>
              <Products bannerText={"Best seller"} bagImage={bag_1} bagImageAlt={"A pink handbag"} itemTitle={"The handy bag"} price={"€400"}></Products>
              <Products bannerText={"Best seller"} bagImage={bag_2} bagImageAlt={"A brown bag"} itemTitle={"the stylish bag"} price={"€250"}></Products>
              <Products bannerText={"New collection"} bagImage={bag_3} bagImageAlt={"a bag"} itemTitle={"The simple bag"} price={"€300"}></Products>
              <Products bannerText={"New collection"} bagImage={bag_4} bagImageAlt={"an orange handbag"} itemTitle={"the trendy bag"} price={"€150"}></Products>
          </main>
          <footer>
              <Tile title={"the brand"} text1={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, ea modi mollitia nihil officia perferendis reiciendis unde veritatis vero voluptates."}
                    text2={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, ea modi mollitia nihil officia perferendis reiciendis unde veritatis vero voluptates."}
                    />
              <Tile image={brand}
                    altText={"our brand"}/>
              <Tile image={out_story}
                    altText={"picture of two women hugging"}/>
              <Tile title={"Our story"}
                    text1={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, ea modi mollitia nihil officia perferendis reiciendis unde veritatis vero voluptates."}
                    />
          </footer>
      </>
  );


}


export default App;



