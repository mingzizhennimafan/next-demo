import styled from "styled-components"

type PageProps = {
    className?: string | undefined
}

const PageWrap = styled.div`
    margin: 10px 100px;
    border: 1px solid #f0f0f0;
    padding: 20px;
    min-height: calc(100vh - 118px);
`

const Page: React.FC<PageProps> = ({ className, children }) => {
    // Render
    return (
        <PageWrap className={`page ${className}`}>{children}</PageWrap>
    )
}

export default Page
