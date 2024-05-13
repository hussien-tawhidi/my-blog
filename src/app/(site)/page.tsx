import Banner from "@/components/ui/home/Banner";
import Hero from "@/components/ui/home/Hero";
import MainGoal from "@/components/ui/home/MainGoal";
import RandomBlog from "@/components/ui/home/RandomBlog";
import ResponsiveDesign from "@/components/ui/home/ResponsiveDesign";

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <MainGoal />
      <ResponsiveDesign />
      <Banner />
      <RandomBlog />
    </main>
  );
}
