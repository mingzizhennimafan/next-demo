import { useRouter } from "next/router"

import Button from "../../components/Button"
import Page from "../../components/Page"

const Detail = () => {
    const router = useRouter()
    const { detail } = router.query
    const handleClick = () => {
        router.push('/')
    }

    return (
        <Page className="">
            <h1>Detail page {detail}</h1>
            <Button onClick={handleClick}>go home</Button>
        </Page>
    )
}

export default Detail