import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villians"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes", { page, limit }],
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 1000 * 60 * 5, //5min
  });

  console.log({ heroesResponse });

  // useEffect(() => {
  //   getHeroesByPage().then();
  // }, []);

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Super héroes"
        description="Descubre, explora y administra super heroes y villanos "
      />

      <section className="directory-section " aria-label="Hero directory">
        {/* Hero Stats */}
        <div className="directory-toolbar justify-end!">
          <HeroStats />
        </div>

        {/* Tabs */}
        <div className="filter-row">
          <Tabs value={selectedTab}>
            <TabsList className="filters">
              <TabsTrigger
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set("tab", "all");
                    return prev;
                  })
                }
                value="all"
              >
                Todos los personajes
              </TabsTrigger>
              <TabsTrigger
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set("tab", "favorites");
                    return prev;
                  })
                }
                value="favorites"
              >
                Favoritos
              </TabsTrigger>
              <TabsTrigger
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set("tab", "heroes");
                    return prev;
                  })
                }
                value="heroes"
              >
                Heroes
              </TabsTrigger>
              <TabsTrigger
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set("tab", "villians");
                    return prev;
                  })
                }
                value="villians"
              >
                Villanos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <HeroGrid heroes={heroesResponse?.heroes ?? []} />
            </TabsContent>
            <TabsContent value="favorites">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="heroes">Change your password here.</TabsContent>
            <TabsContent value="villians">
              Change your password here. 2134234234
            </TabsContent>
          </Tabs>
        </div>
        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
      </section>
    </>
  );
};
