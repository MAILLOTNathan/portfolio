import Pin from "../acternity/Pin";

export default function Contact() {
    return (
        <div className="h-full py-20 w-full dark:bg-black bg-white" id="contact">
            <h1 className="text-4xl font-bold text-center dark:text-white">
                Contactez-moi
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center">
                <Pin title="LinkedIn" url="https://www.linkedin.com/in/nathan-maillot/" webSite="linkedin.com" description="Mon profil LinkedIn" />
                <Pin title="GitHub" url="https://github.com/MAILLOTNathan" webSite="github.com" description="Mon profil GitHub" />
                <Pin title="Mail" url="mailto:nathan.maillot@epitech.eu" webSite="outlook.com" description="Envoyez-moi un mail" />
            </div>
        </div>
    )
}