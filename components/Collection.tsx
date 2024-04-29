"use client";
import { API_URL } from "@/constants";
import { apiPayload } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import LandCard from "./LandCard";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import LoadingLandCard from "./LoadingLandCard";

function Collection() {
  const { ref, inView } = useInView();
  const fetchLands = async ({
    pageParam,
  }: {
    pageParam: number;
  }): Promise<apiPayload> => {
    const res = await fetch(`${API_URL}&page=${pageParam}&page_size=10`);
    return res.json();
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["lands"],
    queryFn: fetchLands,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.next,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (status === "pending")
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array(9).fill(<LoadingLandCard />)}
      </div>
    );
  if (status === "error") return <p>Error: {error.message}</p>;
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((land, index) => (
              <>
                <LandCard index={index} land={land} key={land.id} />
              </>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div>
        {hasNextPage && (
          <>
            <section className="flex mt-6 justify-center items-center w-full">
              <div ref={ref}>
                <Image
                  src="/assets/spinner.svg"
                  alt="spinner"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default Collection;
