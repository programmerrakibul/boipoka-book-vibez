import Banner from "../../Banner/Banner";
import Books from "../../Books/Books";
import Container from "../../Container";


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
