import { classNames } from "../utils";
interface PaginationProps {
  start: number;
  end: number;
  count: number;
  setNext: () => void;
  setPrevious: () => void;
}
export default function Pagination({
  start,
  end,
  setNext,
  setPrevious,
  count,
}: PaginationProps) {
  return (
    <nav
      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{start}</span> to{" "}
          <span className="font-medium">{end}</span> of{" "}
          <span className="font-medium">{count}</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end space-x-4">
        <button
          onClick={() => setPrevious()}
          disabled={start === 1}
          className={classNames(
            "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100",
            start === 1 ? "bg-gray-100 cursor-not-allowed" : ""
          )}
        >
          Previous
        </button>
        <button
          onClick={() => setNext()}
          disabled={end >= count}
          className={classNames(
            "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100",
            end >= count ? "bg-gray-100 cursor-not-allowed" : ""
          )}
        >
          Next
        </button>
      </div>
    </nav>
  );
}
