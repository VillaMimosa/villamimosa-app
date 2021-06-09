import { scheme } from "../../constants/colors";

const AppPlusIcon = () => {


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 36 36"
    >
      <path fill={scheme.light} d="M16 16v14h4V20z" />
      <path fill={scheme.light} d="M30 16H20l-4 4h14z" />
      <path fill={scheme.light} d="M6 16v4h10l4-4z" />
      <path fill={scheme.light} d="M20 16V6h-4v14z" />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  )
};
export default AppPlusIcon;
