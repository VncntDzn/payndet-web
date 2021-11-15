interface SearchIconProps {
  className?: string;
  onClick?: () => void;
}
const SearchIcon = ({ className, onClick }: SearchIconProps) => {
  return (
    <svg
      onClick={onClick}
      className={`${className} w-6 h-6`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );
};
export default SearchIcon;
