type props = {
    children?: React.ReactNode,
    className?: string
}

export function Mark({children, className}:props) {
    return (
        <mark className={`bg-transparent p-0 text-blue-700 relative after:content[] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-full after:h-1 after:bg-blue-700 ${className}`}>{children}</mark>
    )
}