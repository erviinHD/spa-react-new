import { useSearchParams } from "react-router";

interface Props {
  totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get("page") ?? "1";
  const page = Number.isNaN(+queryPage) ? 1 : +queryPage;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="pagination">
      <p>Mostrando 1–4 of 4</p>
      <div className="page-buttons">
        <button
          className="page-button"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          ←
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={
              page === index + 1 ? "page-button page-active" : "page-button"
            }
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="page-button"
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          →
        </button>
      </div>
    </div>
  );
};
