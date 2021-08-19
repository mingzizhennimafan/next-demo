import React from "react"
import _ from "lodash"
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"

import Page from "@/components/Page";

type SSRDemoProps = {
    renderUid: string
}

export const getServerSideProps: GetServerSideProps<SSRDemoProps> = async (context: GetServerSidePropsContext) => {
    // ...
    const renderUid = _.uniqueId('render')

    return {
        props: {
            renderUid,
        }
    }
}

const SSRDemoPage: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ renderUid }) => {
    // Render
    return (
        <Page className="">
            <h1>SSR demo</h1>
            <div>render tag <span>{renderUid}</span></div>
        </Page>
    )
}

export default SSRDemoPage
