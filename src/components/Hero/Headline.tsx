import { H1 } from '@/components/_Typography/H1';
import { P } from '@/components/_Typography/P';
import { Mark } from '@/components/_Typography/Mark';

import { Button } from '@/components/_Elements/Button';

export function Headline() {
    return (
        <div className="h-full text-light">
            <H1>
                Nice to meet you!<br/>
                I'm <Mark>Gustavo Coimbra</Mark>.
            </H1>
            <P className="max-w-xl md:text-lg !mb-16">
                Based in Brazil, I'm a full-stack developer passionate about building amazing web interfaces that provide great user experiences.
            </P>
            <div className="flex gap-4">
                <Button href="https://www.linkedin.com/in/gustavocoimbradev/" variant="linkedin">Linkedin</Button>
                <Button href="github.com/gustavocoimbradev/" variant="github">Github</Button>
            </div>
        </div>
    )
}