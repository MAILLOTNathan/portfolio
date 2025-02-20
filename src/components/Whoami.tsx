import { motion } from "framer-motion";

import { cn } from "../lib/utils";

import { AuroraBackground, Boxes } from "../acternity/AnimatedBackground";

export default function Whoami() {
    return (
        <div id="whoami">
            <AuroraBackground className="flex space-y-32">
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                        Bienvenue sur mon portfolio !
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        Si vous savez déjà ce que vous voulez...
                    </div>
                    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                        <a href="#contact">
                            Contactez-moi !
                        </a>
                    </button>
                </motion.div>
            </AuroraBackground>
            <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                    <Boxes />
                <div className="flex flex-col justify-around space-x-12 items-center sm:flex-row">
                    <img src="photo_pro.jpg" className="h-32 sm:h-96 rounded-xl z-20 sm:p-8" />
                    <span>
                        <h1 className={cn("md:text-4xl text-lg sm:text-xl text-white relative z-20 text-left")}>
                            Qui suis-je ?
                        </h1>
                        <p className="text-left text-xs mt-2 text-neutral-300 relative z-20 w-[80%]">
                            Je suis un jeune développeur, passionné par l'informatique et la musique.<br />
                            Des passions dans lesquels la précision et la rigueur sont de mise.<br />
                            C'est pourquoi je m'efforce de toujours donner le meilleur de moi-même dans tout ce que j'entreprends.<br />
                            Toujours prêt à relever de nouveaux défis, je suis convaincu que la persévérance et la curiosité sont les clés de la réussite.
                        </p>
                    </span>
                </div>
            </div>
    </div>
    )
}