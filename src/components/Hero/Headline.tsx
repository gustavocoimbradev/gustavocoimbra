import { H1 } from '@/components/_Typography/H1';
import { P } from '@/components/_Typography/P';
import { Mark } from '@/components/_Typography/Mark';

import { Button } from '@/components/_Elements/Button';

export function Headline() {
    return (
        <div className="h-screen flex flex-col justify-center text-light justify-center ">
            <H1 className="text-center">
                Nice to meet you!<br/>
                I&apos;m <Mark>Gustavo Coimbra</Mark>
            </H1>
            <P className="max-w-xl md:text-lg mx-auto !mb-12 text-center">
                Based in Brazil, I&apos;m a full-stack developer passionate about building amazing web interfaces that provide great user experiences.
            </P>
            <div className="flex gap-4 items-center justify-center">
                <Button href="https://www.linkedin.com/in/gustavocoimbradev/" variant="linkedin">Linkedin</Button>
                <Button href="https://github.com/gustavocoimbradev/" variant="github">Github</Button>
            </div>
        </div>
    )
}