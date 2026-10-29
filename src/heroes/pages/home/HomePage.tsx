import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { CustomPagination } from "@/components/custom/Custompagination";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villians"
  >("all");

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
          <Tabs value={activeTab}>
            <TabsList className="filters">
              <TabsTrigger onClick={() => setActiveTab("all")} value="all">
                Todos los personajes
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setActiveTab("favorites")}
                value="favorites"
              >
                Favoritos
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setActiveTab("heroes")}
                value="heroes"
              >
                Heroes
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setActiveTab("villians")}
                value="villians"
              >
                Villanos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">All heros here.</TabsContent>
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
        <CustomPagination totalPages={8} />
      </section>
    </>
  );
};
