import { Container } from '@/components/_Layout/Container';
import { Section } from '@/components/_Layout/Section';
import { Grid } from '@/components/_Layout/Grid';

import { Stack } from '@/components/Stacks/Stack';

export function Stacks() {
    return (
        <Section>
            <Container>
                <Grid className="border-solid border-light/10 border-t-2 pt-20 pb-0 mt-10 mb-0">  
                    <Stack title="PHP" years={3}/>
                    <Stack title="Javascript" years={3}/>
                    <Stack title="CSS/SCSS" years={3}/>
                    <Stack title="Next.js" years={1}/>
                    <Stack title="Laravel" years={2}/>
                    <Stack title="Wordpress" years={2}/>
                </Grid>
            </Container>
        </Section>
    )
}