import { Footer } from "../components/Footer";
import NavBare from "../components/NavBare";
import ProductList from "../components/ProductList";
import SearchBare from "../components/SearchBare";
export default function Home() {
  return (
    <>
      <NavBare />

      <SearchBare />
      <ProductList />
      <Footer />
    </>
  );
}
