import React from "react"
import { GetStaticPropsResult, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"
import styled from "styled-components"

import Page from "@/components/Page"
import Button from "@/components/Button"

type StaticDataPageProps = {
    data: number[]
}

const ListWarp = styled.div`
    .list-item:not(:last-child) {
        margin-bottom: 10px;
    }
    .list-item-btn {
        min-width: 60px;
    }
`

const StaticDataPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
    const router = useRouter()
    const handleToDetail = (id: number) => {
        router.push(`/page-with-data/${id}`)
    }
    // Render
    return (
        <Page className="">
            <h1>有数据的静态生成</h1>
            <p>通常数据不会因为请求做更新</p>
            <p>页面数据基于外部数据：getStaticProps</p>
            <ListWarp>
                {data.map((it, index) => (
                    <div className="list-item" key={index}>
                        <span>id: </span><Button className="list-item-btn" onClick={() => handleToDetail(it)}>{it}</Button>
                    </div>
                ))}
            </ListWarp>
        </Page>
    )
}

export const Paths: number[] = [1, 2, 3, 4]

// This function gets called at build time
export async function getStaticProps(): Promise<GetStaticPropsResult<StaticDataPageProps>> {
    // Call an external API endpoint to get posts
    const res = await new Promise<number[]>((resolve) => {
        setTimeout(() => {
            resolve(Paths)
        }, 20);
    })

    return {
        props: {
            data: res,
        },
    }
}

export default StaticDataPage
