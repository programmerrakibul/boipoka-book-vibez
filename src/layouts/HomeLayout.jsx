import Banner from "@/components/Banner/Banner";
import Books from "@/components/Books/Books";
import Container from "@/components/Container/Container";

const HomeLayout = () => {
  return (
    <main>
      <Container>
        <Banner />
        <Books />
      </Container>
    </main>
  );
};

export default HomeLayout;
