type props = {
    children?: React.ReactNode
}

export function Main({children}:props) {
    return (
        <main className="pt-16 min-h-screen relative">{children}</main>
    )
}