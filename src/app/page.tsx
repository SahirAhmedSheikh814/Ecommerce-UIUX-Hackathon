import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import OurProducts from "@/Components/OurProducts";
import Products from "@/Components/ProductCard";
import TopCate from "@/Components/TopCate";



export default function Home() {
  return (
    <div className="">
      <Hero />
      <Products />
      <TopCate />
      <Grid />
      <OurProducts />
    </div>
  );
}
