import Container from "@/components/Container/Container";
import ReadBooks from "@/components/ReadBooks/ReadBooks";
import WishlistBooks from "@/components/WishlistBooks/WishlistBooks";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  return (
    <section className="py-5 my-10">
      <Container>
        <div>
          <div>
            <h1 className="font-bold font-['Work_Sans'] text-4xl text-center py-6 bg-[#13131325] rounded-md  mb-6">
              Books
            </h1>
            <div className="flex justify-center items-center">
              <select
                defaultValue="Sort By"
                onChange={(e) => console.log(e.currentTarget.value)}
                className="select font-['Work_Sans'] text-sm md:text-base"
              >
                <option disabled>Sort By</option>
                <option value="rating">Rating</option>
                <option value="pages">Number of pages</option>
                <option value="year">Publisher year</option>
              </select>
            </div>
          </div>

          <Tabs>
            <TabList className="font-['work_sans'] text-lg text-[#13131350] border-b border-[#13131330]">
              <Tab>Read Books</Tab>
              <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel className="space-y-3.5 mt-6">
              <ReadBooks />
            </TabPanel>

            <TabPanel className="space-y-3.5 mt-6">
              <WishlistBooks />
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default ListedBooks;
