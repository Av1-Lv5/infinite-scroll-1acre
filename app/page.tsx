"use client";
import Collection from "@/components/Collection";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function Home() {
  return (
    <main className="container mx-auto px-6 py-6">
      <QueryClientProvider client={queryClient}>
        <Collection />
      </QueryClientProvider>
    </main>
  );
}
