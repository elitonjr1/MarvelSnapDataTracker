import React from "react";
import Layout from "../../layout/Layout";
import NewsDetailsView from "../../layout/components/NewsDetailsView";
import styled from 'styled-components';
import { graphql, PageProps } from "gatsby";

const date = new Date();

const NewsDetails = ({ data }: PageProps) => {
    
    const {html, frontmatter: {description, image, publishDate, title}} = (data as any).markdownRemark;

    return <Layout>
        <NewsPage>
            <NewsDetailsView title={title} description={description} publishDate={date} image={image}></NewsDetailsView>
        </NewsPage>
    </Layout>
}

export default NewsDetails;

const NewsPage = styled.div``

export const pageQuery = graphql`
    query GetNewsBySlug($id: String!) {
        markdownRemark(id: {eq: $id}) {
        fields {
            slug
        }
        html
        frontmatter {
            description
            image
            publishDate
            title
        }
        }
    }
  `

