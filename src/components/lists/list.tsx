import { ListProps } from "./types";

const List = ({ url, classNames, children }: ListProps): JSX.Element => {
  return (
    <li className="mt-3 mb-3 border-t-2 py-3 w-11/12 list-none  ml-8 pl-5">
      <a className="hover:text-blue-900 " href={url}>
        {children}
      </a>
    </li>
  );
};

export default List;
