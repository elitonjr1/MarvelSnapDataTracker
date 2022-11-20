import React, { useEffect, useState } from "react";
import Layout from '../layout/Layout'
import MainParagraph from "../layout/components/MainParagraph";
import { HeaderProps } from "../layout/components/MainParagraph";
import News from "../layout/components/News";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";

const items = Array.from( { length: 3 }, (_, index) => ({
  title: `Title ${index}`,
  autor: `Eliton Junior`,
  postDate: `14/11/2022 22:37:01`,
  image: "https://media.snap.fan/cdn-cgi/image/format=auto,width=710,height=398,quality=80,fit=cover,gravity=top/news/original_images/2022-11-08-patch-8-7-variants_copy.webp",
  index: index
}) )

const Home = ({ data } : PageProps) => {   
  const headerProps = (data as any).json as HeaderProps;
  const itemsProps = (data as any).allMarkdownRemark.nodes.map(({frontmatter} : any) => ({...frontmatter}));

  return <Layout>
      <header>
        <MainParagraph {...headerProps}></MainParagraph>
      </header>
      <div className="container">        
        <News items={itemsProps}></News>
      </div>
  </Layout> 
} 

export default Home;


export const pageQuery = graphql`
  {
    json {
      description
      title
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          description
          image
          publishDate
          title
          slug
        }
      }
    }
  }
`

