import Hero from "./homeSections/Hero/Hero";
import Services from "./homeSections/Services/Services";
import Package from "./homeSections/Package/Package";

const Home = () => {
  return (
    <main id="home">
      <Hero />
      <Services />
      <Package />
    </main>
  )
}

export default Home