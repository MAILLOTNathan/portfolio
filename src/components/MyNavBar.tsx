
import { Navbar, Button, DarkThemeToggle } from "flowbite-react";

export default function MyNavBar() {
    return (
        <Navbar fluid rounded className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md dark:shadow-lg w-screen">
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Nathan Maillot
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <DarkThemeToggle />
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="md:order-1">
                <Navbar.Link href="#whoami" active={document.location.hash === "#whoami"} onClick={(e) => { e.preventDefault(); document.querySelector('#whoami')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Qui suis-je ?
                </Navbar.Link>
                <Navbar.Link href="#parcours" active={document.location.hash === "#parcours"} onClick={(e) => { e.preventDefault(); document.querySelector('#parcours')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Mon Parcours
                </Navbar.Link>
                <Navbar.Link href="#hobbies" active={document.location.hash === "#hobbies"} onClick={(e) => { e.preventDefault(); document.querySelector('#hobbies')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Mes Passions
                </Navbar.Link>
                <Navbar.Link href="#skills" active={document.location.hash === "#skills"} onClick={(e) => { e.preventDefault(); document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Mes Compétences
                </Navbar.Link>
                <Navbar.Link href="#contact" active={document.location.hash === "#contact"} onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Contactez-moi
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}