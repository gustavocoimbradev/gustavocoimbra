type props = {
    children?: React.ReactNode,
    className?: string
}

export function P({children, className}:props) {
    return (
        <p className={`text-md leading-relaxed mb-4 ${className}`}>{children}</p>
    )
}