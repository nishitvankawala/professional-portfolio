import dynamic from 'next/dynamic'
const OrbitHero = dynamic(() => import('../components/OrbitHero'), { ssr: false })

export default function Home(){
  return <OrbitHero />
}


// import dynamic from "next/dynamic";

// const HorizontalOrbitHero = dynamic(
//   () => import("../components/HorizontalOrbitHero"),
//   { ssr: false }
// );

// export default function Home() {
//   return <HorizontalOrbitHero />;
// }
