import { Container } from '@/components/_Layout/Container';
import { Section } from '@/components/_Layout/Section';

import { Headline } from '@/components/Hero/Headline';

export function Hero() {
    return (
        <Section className="h-screen">
            <Container className="justify-center">
                <Headline/>
            </Container>
        </Section>
    )
}