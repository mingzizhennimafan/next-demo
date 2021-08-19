import { NextPage } from 'next'

import Page from '@/components/Page'

interface Props {
    userAgent?: string;
}

const HelloPage: NextPage<Props> = ({ userAgent }) => (
    <Page>
        <div className="container">
            <h1>Hello Next.js</h1>
            <p>与纯展示的react组件无异</p>
            <p>{userAgent}</p>
        </div>
    </Page>
)

HelloPage.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
}

export default HelloPage
