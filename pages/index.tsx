import { Footer } from "@/Components/Footer";
import { Hero } from "@/Components/Hero";
import { Nav } from "@/Components/Nav";
import { Projects } from "@/Components/Projects";
import { Stack } from "@/Components/Stack";

export default function Home() {
  return (
   <div className="w-full overflow-x-hidden">
    <Nav />
    <Hero/>
    <Projects />
    <Stack />
    <Footer />
   </div>
  );
}
