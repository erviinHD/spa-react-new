import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroGrid } from "@/heroes/components/HeroGrid";
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
        {/* Hero Stats */}
        <div className="directory-toolbar justify-end!">
          <HeroStats />
        </div>
      </section>

      <section className="directory-section" aria-label="Hero directory">
        {/* <div className="filter-row">
          <div className="filters">
            {filters.map((item, index) => (
              <button key={item} className={index === 0 ? "filter-active" : ""}>
                {item}
              </button>
            ))}
            <button className="favorites-filter">
              <Heart size={13} /> Favorites
            </button>
          </div>
          <button className="sort-button">
            Recently added <ChevronDown size={15} />
          </button>
        </div> */}
        <HeroGrid />
        <div className="pagination">
          <p>Showing 1–4 of 4</p>
          <div className="page-buttons">
            <button className="page-button" disabled>
              ←
            </button>
            <button className="page-button page-active">1</button>
            <button className="page-button" disabled>
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
