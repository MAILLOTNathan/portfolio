
import { Navbar, Button, DarkThemeToggle } from "flowbite-react";

export default function MyNavBar() {
    return (
        <Navbar fluid rounded className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md dark:shadow-lg">
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Nathan Maillot
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <DarkThemeToggle />
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#whoami" active={document.location.hash === "#whoami"}>
                    Qui suis-je ?
                </Navbar.Link>
                <Navbar.Link href="#parcours" active={document.location.hash === "#parcours"}>
                    Mon Parcours
                </Navbar.Link>
                <Navbar.Link href="#hobbies" active={document.location.hash === "#hobbies"}>
                    Mes Passions
                </Navbar.Link>
                <Navbar.Link href="#skills" active={document.location.hash === "#skills"}>
                    Mes Compétences
                </Navbar.Link>
                <Navbar.Link href="#contact" active={document.location.hash === "#contact"}>
                    Contactez-moi
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}