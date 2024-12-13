type props = {
    children?: React.ReactNode,
    className?: string
}

export function Section({children, className}:props) {
    return (
        <section className={`my-20 ${className}`}>{children}</section>
    )
}