import { H3 } from '@/components/_Typography/H3';
import { P } from '@/components/_Typography/P';

type props = {
    title: string,
    years: number
}

export function Stack({title, years}:props) {
    return (
        <article className="flex flex-col gap-4 w-auto">
            <H3 className="text-light !mb-0">{title}</H3>
            <P className="text-light mb-0">{years} {years === 1 ? `Year` : `Years`} Experience</P>
        </article>
    )
}