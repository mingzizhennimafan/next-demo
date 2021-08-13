import React from "react"
import { GetServerSideProps, GetServerSidePropsContext } from "next"

import Page from "../../components/Page";

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    // ...
    console.log('re-get-something');

    return {
        props: {}
    }
}

const SSRDemoPage: React.FC = () => {
    console.log('re-render');

    // Render
    return (
        <Page className="">SSR demo</Page>
    )
}

export default SSRDemoPage
