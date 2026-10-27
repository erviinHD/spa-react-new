import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

export const HeroPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Super héroes"
        description="Descubre, explora y administra super heroes y villanos "
      />

      <section className="directory-section " aria-label="Hero directory">
        <div className="directory-toolbar justify-end!">
          {/* Hero Stats */}
          <HeroStats />
        </div>
      </section>
    </>
  );
};
