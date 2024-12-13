import { Container } from '@/components/_Layout/Container';

import { Brand } from '@/components/Header/Brand';

export function Header() {
    return (
        <header className="w-screen fixed h-16">
            <Container className="flex flex-col h-full">
                <Brand/>
            </Container>
        </header>
    )
}