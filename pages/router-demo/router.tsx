import { useRouter } from "next/router"
import styled from "styled-components"

import Page from "@/components/Page"
import Button from "@/components/Button";

const RouterList = styled.div`
    
`;

const Router = () => {
    const router = useRouter()
    const handleClick = (id: string) => {
        router.push(`/router-demo/${id}`)
    }

    return (
        <Page>
            <h1>Router page</h1>
            <div className="intro">静态生成，Static Generation (Recommended): HTML 在构建时生成，并将在每个请求中重用</div>
            <br />
            <RouterList>
                <div className="item">
                    <Button onClick={() => handleClick('dynamic')}>dynamic router apple</Button>
                </div>
            </RouterList>
        </Page>
    )
}

export default Router
