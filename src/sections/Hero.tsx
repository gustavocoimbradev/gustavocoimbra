import Image from 'next/image';

export function Hero() {
    return (
        <section className="h-[100dvh] flex flex-col items-center justify-center bg-primary-950 text-primary-50">
            <div className="container flex justify-center">
                <div className="max-w-[500px] flex flex-col justify-center items-center text-center">
                <Image 
                    src="/me.jpeg" 
                    alt="Gustavo Coimbra" 
                    width={200} 
                    height={200} 
                    className="mb-10 rounded-full border-4 border-primary-500"
                />
                <h6>Olá, sou o <strong>Gustavo Coimbra</strong></h6>
                <h1><strong>DEV <span className="text-primary-500">FULLSTACK</span></strong></h1>
                <p className="mb-6">Especialista em <strong>PHP, SCSS, JS, Wordpress, Laravel, Next.JS e Tailwind</strong> com <strong>4 anos de experiência</strong> profissional no mercado.</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="btn-primary">Contrate-me</a>
                    <a href="#" className="btn-secondary">Ver portfolio</a>
                </div>
                </div>
            </div>
        </section>
    )
}