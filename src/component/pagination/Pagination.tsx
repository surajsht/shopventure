import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  prevPage,
  nextPage,
  selectPagination,
} from "../../features/pagination/PaginationSlice";

const Pagination = () => {
  const [pageItem, setPageItem] = useState<number[]>([]);
  const [totalPage, setTotalPage] = useState<number>(0);

  const dispatch = useAppDispatch();
  const { totalProduct } = useAppSelector((state) => state.product);
  const { value } = useAppSelector((state) => state.pagination);

  useEffect(() => {
    const postPerPage = 8;
    const totalPage = Math.ceil(totalProduct / postPerPage);
    setTotalPage(totalPage);

    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }

    setPageItem(pages);
  }, [totalProduct]);

  return (
    <div className="flex items-center justify-center gap-6 mt-12">
      <button
        className={`${value <= 0 ? "text-gray-400 cursor-not-allowed" : ""}`}
        onClick={() => dispatch(prevPage())}
        disabled={value <= 0 ? true : false}
      >
        Prev
      </button>
      {pageItem.map((item, idx) => {
        return (
          <button
            key={idx}
            className={`${idx === value ? "bg-blue-700 text-white" : ""} py-1 px-3 hover:bg-blue-700 hover:text-white`}
            onClick={() => dispatch(selectPagination(idx))}
          >
            {item}
          </button>
        );
      })}
      <button
        className={`${value >= totalPage - 1 ? "text-gray-400 cursor-not-allowed" : ""}`}
        onClick={() => dispatch(nextPage())}
        disabled={value >= totalPage - 1 ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
