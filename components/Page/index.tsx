
type PageProps = {
    className?: string | undefined
}

const Page: React.FC<PageProps> = ({ className, children }) => {
    // Render
    return (
        <>
            <style jsx>{`
                .page {
                    margin: 10px 200px;
                }
            `}</style>
            <div className={`page ${className}`}>{children}</div>
        </>
    )
}

export default Page
