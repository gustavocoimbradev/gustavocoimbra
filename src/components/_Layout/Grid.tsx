type props = {
    children?: React.ReactNode,
    className?: string
}

export function Grid({children, className}:props) {
    return (
        <div className={`grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-12 ${className}`}>{children}</div>
    )
}