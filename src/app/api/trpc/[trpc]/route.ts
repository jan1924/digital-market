import { AppRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: AppRouter,
    // @ts-expect-error Context already passed from express middleware
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
