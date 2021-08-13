import React from "react"
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

// This function gets called at build time
export const getStaticProps: GetStaticProps<{ data: number[] }> = async (
    context: GetStaticPropsContext
) => {
    // Call an external API endpoint to get posts
    // const someFetch = XXX
    const data = [1, 2, 3, 4, 5, 6]
    console.log('params', context.params);
    // 可以根据路由去获取数据，然后返回

    return {
        props: {
            data,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10,
    }
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async (context: GetStaticPathsContext) => {
    const paths = [1, 2, 3].map((id) => ({
        params: { id: `${id}` },
    }))

    return {
        paths,
        fallback: false
    }
}

const StaticRouterPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
    const router = useRouter()

    console.log(data)

    // Render
    return (
        <div className="">{router.query.id}</div>
    )
}

export default StaticRouterPage