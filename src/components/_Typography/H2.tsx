type props = {
    children?: React.ReactNode,
    className?: string
}

export function H2({children, className}:props) {
    return (
        <h1 className={`text-3xl md:text-5xl mb-10 font-bold leading-tight ${className}`}>{children}</h1>
    )
}