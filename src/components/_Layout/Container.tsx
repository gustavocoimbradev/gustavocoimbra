type props = {
    children?: React.ReactNode,
    className?: string
}

export function Container({children, className}:props) {
    return (
        <div className={`container px-6 mx-auto flex flex-col justify-center ${className}`}>{children}</div>
    )
}