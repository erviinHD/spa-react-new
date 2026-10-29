import { useParams } from "react-router";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";

export const HeroPage = () => {
  const { idSlug = "" } = useParams();
  console.log({ idSlug });

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
      </section>

      {/* Grid */}

      <section className="directory-section" aria-label="Hero directory">
        <HeroGrid heroes={[]} key={idSlug} />
      </section>
    </>
  );
};
