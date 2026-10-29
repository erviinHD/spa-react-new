interface Props {
  totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
  const page = 8 as number;
  return (
    <div className="pagination">
      <p>Mostrando 1–4 of 4</p>
      <div className="page-buttons">
        <button className="page-button" disabled={page === 1}>
          ←
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={
              page === index + 1 ? "page-button page-active" : "page-button"
            }
          >
            {index + 1}
          </button>
        ))}
        <button className="page-button" disabled={page === totalPages}>
          →
        </button>
      </div>
    </div>
  );
};
