const Navbar = (): JSX.Element => {
  return (
    <ul className="text-base flex justify-around bg-sky-900 text-white py-2 px-10">
      <li>
        <a href="/">Today</a>
      </li>
      <li>
        <a href="/">Hourly</a>
      </li>
      <li>
        <a href="/">10 Day</a>
      </li>
      <li>
        <a href="/">Weeknd</a>
      </li>
      <li>
        <a href="/">Monthly</a>
      </li>
      <li>
        <a href="/">Radar</a>
      </li>
      <li>
        <a href="/">Video</a>
      </li>
    </ul>
  );
};

export default Navbar;
