import React from "react";
import styled from 'styled-components';


export type NewsProps = {
    items: NewsItemProps[];
}

export type NewsItemProps = {
    title: string;    
    autor: string;
    postDate: string;
    image: string;
    index: number;
    slug: string;
}

const News = ( {items} : NewsProps ) => {
    return <Feed>       
        <div><TitleHeader>News</TitleHeader> </div>
        <FeedList>        
            {items.map((item) => <Item key={item.index} {...item} />)}
        </FeedList>
    </Feed>
}

export default News;

const Item = ({ title, autor, postDate, image, slug } : NewsItemProps) => {
    return <Link href={slug}>
        <Img src={image} alt={title}></Img>
    </Link>
}

const Feed = styled.div`
    max-width: 960px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 32px 0;
    height: 300px;

    @media only screen and (max-width: 600px) {
        max-width: 960px;
        justify-content: inherit;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 32px 20px;
    }
`
const FeedList = styled.div`
    display: flex;
    gap: 8px;   

    a:first-of-type {
        width: 70%;
        height: 100%;
    }

    a:nth-child(n+2) {
        width: 30%;
        height: 50%;
    }

    @media only screen and (max-width: 600px) {
        display: grid;
        gap: 5px;
        grid-template-columns: repeat(1, 1fr);  

        a:first-of-type {
        width: 100%;
        height: 100%;
    }

    a:nth-child(n+2) {
        width: 100%;
        height: 100%;
    }
    }

`

const Link = styled.a`
    border: 1px solid purple;
    border-radius: 5px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    display: block;
`
const TitleHeader = styled.h2`
    word-wrap: break-word;
    font-family: 'Ultimatum Heavy Italic,Helvetica Neue,Arial,Sans-Serif';
    line-height: 1.2;
    word-break: break-word;
    font-size: calc(1.375rem + 1.5vw);    
`

