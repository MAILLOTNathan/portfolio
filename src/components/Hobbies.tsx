import Grids from "../acternity/Grids";

export default function Hobbies() {
  return (
    <div className="h-screen py-20 w-full dark:bg-black bg-white" id="hobbies">
        <h1 className="text-4xl font-bold text-center dark:text-white">
            Cliquez pour voir mes passions
        </h1>
      <Grids cards={cards} />
    </div>
  );
}

const Music = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        La musique, ma grande passion
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        La musique est une passion qui m'accompagne depuis mon plus jeune âge.
        Elle m'inspire, me motive et me permet de m'évader.
        Actuellement batteur d'un groupe, j'ai souvent l'occasion de me produire sur scène et en studio.
      </p>
    </div>
  );
};

const Cars = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Les voitures, une fascination sans fin.
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Le son des moteurs, l'odeur de l'essence, la vitesse... Les voitures sont une véritable passion pour moi.
        J'ai bientôt l'occasion d'aller au Japon, un pays où la culture automobile est très présente.
        Ce sera un pelerinage pour moi, et j'ai hâte de vous en dire plus à mon retour.
      </p>
    </div>
  );
};
const Sound = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        La sonorisation, mon futur 2ème métier
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Depuis que j'ai commencé la musique, j'ai toujours été fasciné par la sonorisation.
        En effet celà fait maintenant 8 ans que j'ai l'opportunité d'assister des ingénieurs du son dans leur travail.
        J'aimerai un jour avoir ma propre société de sonorisation et juste apprécier le son.
      </p>
    </div>
  );
};
const Print3d = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        L'impression 3D, une passion grandissante.
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Depuis que j'ai découvert l'impression 3D, je suis fasciné par les possibilités qu'elle offre.
        J'ai déjà réalisé plusieurs projets, et j'ai hâte de continuer à explorer ce domaine.
        C'est une technologie qui me passionne, et je suis convaincu qu'elle révolutionnera de nombreux secteurs.
        J'en suis d'autant plus fou depuis que j'ai ma propre imprimante !
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <Music />,
    className: "md:col-span-2",
    thumbnail:
      "https://c.stocksy.com/a/jQ5400/z9/974189.jpg",
  },
  {
    id: 2,
    content: <Cars />,
    className: "col-span-1",
    thumbnail:
      "https://strapi-zervtek.s3.ap-southeast-1.amazonaws.com/image0_5c1a36e418.webp",
  },
  {
    id: 3,
    content: <Sound />,
    className: "col-span-1",
    thumbnail:
      "https://www.woodbrass.com/images/woodbrass/MIDAS+M32-1.JPG",
  },
  {
    id: 4,
    content: <Print3d />,
    className: "md:col-span-2",
    thumbnail:
      "https://hlhrapid.com/wp-content/uploads/2022/11/fused-deposition-modeling.jpg",
  },
];
