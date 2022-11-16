import React from "react";
import Layout from "../layout/Layout";
import NewsDetailsView from "../layout/components/NewsDetailsView";
import styled from 'styled-components';

const date = new Date();

const NewsDetails = () => {
    return <Layout>
        <NewsPage>
            <NewsDetailsView title="Patch 8.7 New Variants and Unreleased Card Changes" description="Patch 8.7 New Variants and Unreleased Card Changes" publishDate={date} image="https://media.snap.fan/cdn-cgi/image/format=auto,width=896,height=504,quality=80,fit=cover,gravity=top/news/original_images/2022-11-08-patch-8-7-variants_copy.webp"></NewsDetailsView>
        </NewsPage>
    </Layout>
}

export default NewsDetails;

const NewsPage = styled.div``

