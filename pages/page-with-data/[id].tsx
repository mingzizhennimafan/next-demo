import React from "react"
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

import { random } from "lodash";

import Page from "@/components/Page"

import { Paths } from "./static-data";

// This function gets called at build time
export const getStaticProps: GetStaticProps<{ data: string[] }, { id: string }> = async (
    context: GetStaticPropsContext<{ id: string }>
) => {
    // Call an external API endpoint to get posts
    const data: string[] = []
    for (let index = 0; index < 5; index++) {
        data.push(`${context.params ? context.params.id : ''}---${random(999, false)}`)
    }

    console.log('generate');

    return {
        props: {
            data,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 5,
    }
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async (context: GetStaticPathsContext) => {
    const paths = Paths.map((id) => ({
        params: { id: `${id}` },
    }))

    return {
        paths,
        fallback: false
    }
}

const StaticRouterPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
    const router = useRouter()
    // Render
    return (
        <Page className="">
            <p>页面路径基于外部数据：getStaticPaths</p>
            <p>在有动态路由的页面上使用getStaticProps时，必须使用getStaticPaths</p>
            <p>getServerSideProps 与 getStaticPaths 不能一起使用</p>
            <div className="info">{router.query.id}</div>
            <div className="info">{data.join('|-|')}</div>
        </Page>
    )
}

export default StaticRouterPage