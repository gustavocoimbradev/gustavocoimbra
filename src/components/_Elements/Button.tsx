import Link from "next/link";

type props = {
    children?: React.ReactNode,
    className?: string,
    href: string,
    variant: string,
}

export function Button({children, className, href, variant}:props) {

    let classes;

    if (variant === 'github') {
        classes = 'bg-blue-100 text-dark hover:bg-blue-200';
    }

    if (variant === 'linkedin') {
        classes = 'bg-blue-700 text-light border-blue-700 hover:bg-blue-800';
    }

    return (
        <Link target="_blank" href={href} className={` transition-all duration-300  py-4 px-12 rounded-full font-bold ${classes} ${className}`}>{children}</Link>
    )
}