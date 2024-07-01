import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col relative left-0 h-full items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1376"
          height="965"
          viewBox="0 0 1376 965"
          fill="none"
          className="absolute -z-10 left-0"
        >
          <g filter="url(#filter0_b_1_72952)">
            <path
              d="M765.899 743.5C695.608 924.32 423.154 965 0 965V0H1376C1368.44 51.0968 1347.62 166.195 1324.85 217.813C1296.39 282.336 1214.3 341.775 1072.39 393.002C930.49 444.229 853.764 517.475 765.899 743.5Z"
              fill="white"
              fill-opacity="0.9"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_1_72952"
              x="-50"
              y="-50"
              width="1476"
              height="1065"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_72952"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_72952"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      <div className=" flex flex-col h-full mt-4 mr-4 justify-between">
        <header className=" flex row items-center justify-start">
          <a href="/" className="flex row items-center">
            <Image
              src="/solta.png"
              alt="Picture of the author"
              width={70}
              height={70}
            />
            <div className="ml-3">
              <h1 className="text-2xl text-cyan-600">WaterDay</h1>
              <h2 className="">Calculadora de ingestão de água</h2>
            </div>
          </a>
          {/* <nav className="flex gap-3 text-cyan-500">
            <a href="#sobre">Sobre</a>
            <a href="#blog">Blog</a>
            <a href="#contato">Contato</a>
          </nav> */}
        </header>
        <section className="max-w-4xl m-3 flex flex-row gap-4">
          <p className="max-w-lg text-xl">
            A hidratação adequada é essencial para o bom funcionamento do corpo e da mente. O WaterDay oferece uma maneira prática de calcular sua ingestão de água diária, ajudando você a manter-se no caminho certo para uma vida mais saudável. 
          </p>
          <form action="" className="bg-white p-3 rounded-md m-2 flex flex-col w-96">
            <label htmlFor="peso" className="text-cyan-700 m-2">Peso</label>
            <input type="number" className="bg-cyan-200 rounded-md m-2"/>
            <label htmlFor="idade" className="text-cyan-700 m-2">Idade</label>
            <input type="number" className="bg-cyan-200 rounded-md m-2"/>
            <input type="submit" value="Calcular" className="bg-cyan-400 text-white rounded-md p-2 m-2 w-40 flex" />
          </form>
        </section>
      </div>
    </main>
  );
}
