import React from "react"

type StaticDataPageProps = {
    data: number[]
}

const StaticDataPage: React.FC<StaticDataPageProps> = ({ data }) => {
    // Render
    return (
        <div className="">{data.join('-')}</div>
    )
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    // const someFetch = XXX
    // const data = fetch()
    
    // const data = fetch('/api/hello')
    //     .then(function (response) {
    //         return response.json();
    //     })

    // console.log(data);

    return {
        props: {
            data: [1],
        },
    }
}

export default StaticDataPage
