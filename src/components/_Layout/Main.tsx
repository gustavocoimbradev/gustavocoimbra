type props = {
    children?: React.ReactNode
}

export function Main({children}:props) {
    return (
        <main className="min-h-screen relative">{children}</main>
    )
}