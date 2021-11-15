import ReactPaginate from "react-paginate";

interface CustomPaginationProps {
  pageCount: number;
  onPageChange: any;
}
const CustomPagination = ({
  pageCount,
  onPageChange,
}: CustomPaginationProps) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName="flex w-48 items-center justify-evenly"
      pageClassName="p-1"
      activeClassName="bg-blue-dark rounded-md px-3"
    />
  );
};

export default CustomPagination;
