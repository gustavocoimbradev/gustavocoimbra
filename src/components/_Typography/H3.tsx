type props = {
    children?: React.ReactNode,
    className?: string
}

export function H3({children, className}:props) {
    return (
        <h3 className={`text-2xl md:text-4xl mb-10 font-bold leading-tight ${className}`}>{children}</h3>
    )
}