type props = {
    children?: React.ReactNode,
    className?: string
}

export function H1({children, className}:props) {
    return (
        <h1 className={`text-4xl md:text-6xl mb-10 font-bold leading-tight ${className}`}>{children}</h1>
    )
}