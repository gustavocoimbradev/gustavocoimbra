import { Container } from '@/components/_Layout/Container';

import { Brand } from '@/components/Header/Brand';

export function Header() {
    return (
        <header className="w-screen absolute h-16">
            <Container>
                <Brand/>
            </Container>
        </header>
    )
}