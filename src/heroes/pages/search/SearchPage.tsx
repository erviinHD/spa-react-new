import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { SearchControl } from "./ui/SearchControl";

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Búsqueda de Super héroes"
        description="Descubre, explora y administra super heroes y villanos "
      />

      {/* Filter */}
      <SearchControl />
    </>
  );
};

export default SearchPage;
