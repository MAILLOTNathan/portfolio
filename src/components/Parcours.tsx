import { Timeline } from "../acternity/Timeline";

export default function Parcours() {
  const data = [
    {
        title: "Avril 2025 - Août 2025",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Développeur Full Stack chez ROSS (Retail Optimization Software Solutions) au Port (La Réunion)
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Mon travail n'a pas encore commencé, mais j'ai hate de vous en dire plus !
            </p>
            <div className="grid grid-cols-2 gap-4">
            </div>
          </div>
        ),
    },
    {
      title: "Septembre 2024 - Mars 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Assistant Epitech en Région (AER) au campus Epitech de Saint-André (La Réunion)
            Part Time (14h/semaine)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Mon travail consiste à aider les étudiants de première année à s'adapter à la pédagogie de l'école Epitech.
            Je fais principalement de l'écoute, mais je fais aussi passer des soutenances de projet, des revues de codes.
            La plus grosse difficulté, c'est d'adapter son discours à chaque étudiant, car chacun a son propre rythme d'apprentissage.
            Le plus gratifiant, c'est de voir les étudiants progresser, devenir autonomes, mais surtout de voir qu'ils peuvent nous surpasser.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJdGvuZyOwkLZ6kKvqjBv-Ejnsl_TUjGi7A&s" alt="Epitech" className="rounded-lg" />
          </div>
        </div>
      ),
    },
    {
      title: "Janvier 2024 - Mars 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Président du Bureau Des Étudiants (BDE) de l'école Epitech de Saint-André (La Réunion)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Mon travail consiste à organiser des évènements pour les étudiants de l'école, à gérer le budget du BDE, à représenter les étudiants auprès de l'administration de l'école.
            Nous avons pu avec mon équipe organiser le WEI (Week-End d'Intégration) de l'école, une journée jeux vidéo, une soirée de raclette, ou encore une sortie karting, et bien d'autres évènements.
            Le plsu difficile, c'est de gérer toute la partie administrative, le calendrier tout en gérant sa scolarité en parallèle.
            Mais c'est tout de même une fierté de voir les étudiants s'amuser, se détendre, et de voir qu'ils apprécient les évènements que nous organisons.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="bde.png" alt="BDE" className="rounded-lg" />
          </div>
        </div>
      ),
    },
    {
      title: "Juillet 2023 - Décembre 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Stagiaire Développeur Métier chez Tutteo
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            J'avais pour mission de migrer toute la partie test fonctionnels qui était assez ancienne.
            Mais aussi d'ajouter quelques petites fonctionnalités, telle que la possibilité d'afficher les doigtés d'instruments à cuivre.
            C'était une expérience sans pareil, car j'ai intégré une équipe en télétravail complet, dont les membres habitait dans les 4 coins du monde.
            Le niveau d'exigence était très élevé, mais j'ai appris énormément de choses, et j'ai pu apporter ma pierre à l'édifice.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://blog.flat.io/content/images/2022/01/Tutteo-Blog-Cover.png" alt="Tutteo" className="rounded-lg" />
            <img src="https://blog.flat.io/content/images/size/w2000/2023/10/IMG_3291_edited-1.jpg" alt="Tutteo-retreat-2023" className="rounded-lg" />
          </div>
        </div>
      ),
    },
    {
        title: "Septembre 2022",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Entrée à l'école Epitech de Saint-André (La Réunion)
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Une nouvelle aventure commence pour moi, l'école Epitech est une école d'informatique qui a une pédagogie par projet.
                C'est-à-dire que nous apprenons en faisant, en réalisant des projets, en travaillant en groupe.
                C'est une méthode qui me convient parfaitement, car j'apprends mieux en pratiquant.
                J'ai pu découvrir de nouveaux langages de programmation, de nouvelles technologies, et surtout j'ai pu rencontrer des personnes formidables.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJdGvuZyOwkLZ6kKvqjBv-Ejnsl_TUjGi7A&s" alt="Epitech" className="rounded-lg" />
            </div>
          </div>
        ),
      },
  ];
  return (
    <div className="w-full" id="parcours">
      <Timeline data={data} />
    </div>
  );
}
