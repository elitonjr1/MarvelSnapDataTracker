import React, { useEffect, useState } from "react";
import Layout from '../layout/Layout'
import MainParagraph from "../layout/components/MainParagraph";
import News from "../layout/components/News";
import styled from "styled-components";

const items = Array.from( { length: 3 }, (_, index) => ({
  title: `Title ${index}`,
  autor: `Eliton Junior`,
  postDate: `14/11/2022 22:37:01`,
  image: "https://media.snap.fan/cdn-cgi/image/format=auto,width=710,height=398,quality=80,fit=cover,gravity=top/news/original_images/2022-11-08-patch-8-7-variants_copy.webp",
  index: index
}) )

const Home = () => { 
  
  return <Layout>
      <header>
        <MainParagraph title="Marvel Snap Card and Deck Database"
                       description="Welcome to Marvel Snap, your home for top Marvel Snap Decks, Card Database and Meta analysis!"></MainParagraph>
      </header>
      <div className="container">        
        <News items={items}></News>
      </div>
  </Layout> 
} 

export default Home;

const TitleHeader = styled.h2`
    word-wrap: break-word;
    font-family: 'Ultimatum Heavy Italic,Helvetica Neue,Arial,Sans-Serif';
    line-height: 1.2;
    word-break: break-word;
    font-size: calc(1.375rem + 1.5vw);
`


