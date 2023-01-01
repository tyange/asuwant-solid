import { FaRegularCopyright } from "solid-icons/fa";

const Footer = () => {
  return (
    <footer class="flex gap-2 items-center justify-center text-sm pb-3">
      <span>
        <FaRegularCopyright />
      </span>
      <span>{new Date().getFullYear()}</span>
      <span>tyange</span>
    </footer>
  );
};

export default Footer;
