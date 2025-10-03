import { Footer } from "@/Components/Footer";
import { Hero } from "@/Components/Hero";
import { Nav } from "@/Components/Nav";
import { Projects } from "@/Components/Projects";
import { Stack } from "@/Components/Stack";

export default function Home() {
  return (
   <div>
    <Nav />
    <Hero/>
    <Projects />
    <Stack />
    <Footer />
   </div>
  );
}
