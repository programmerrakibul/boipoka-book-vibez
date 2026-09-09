import seedData from "@/server/seed-data";
import { createServer, Model } from "miragejs";

export default function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,
    models: {
      book: Model,
    },

    seeds(server) {
      seedData.forEach((book) => {
        server.create("book", book);
      });
    },

    namespace: "api",
    routes() {
      this.get("/books", (schema) => {
        return schema.all("book").models
      });
    },
  });
}
