import Nav from "./Nav";
import RenderDialog from "./DialogMenu";

const Header = ({ selectedPage, setSelectedPage }: any) => {
  const toggleMobileMenu = () => {
    const dialog = document.querySelector("dialog");
    const open = dialog?.open;
    if (!open) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  };

  const handlePageClick = (page: string) => {
    setSelectedPage(page);
    const dialog = document.querySelector("dialog");
    dialog?.close();
  };

  const renderNavLinks = () => {
    return [
      "bio",
      "writing",
      "speaking",
      "multimedia",
      "policyAndAdvocacy",
      "science",
      "press",
      "contact",
    ].map((page) => (
      <li
        key={page}
        onClick={() => handlePageClick(page)}
        className={`cursor-pointer xl:mx-3 md:mx-2 mx-1 ${
          selectedPage === page && "underline h-10"
        } hover:underline `}
      >
        {page.charAt(0).toUpperCase() + page.slice(1)}
      </li>
    ));
  };

  return (
    <header className="w-full h-24 flex px-[1.8vw] justify-between items-center bg-[#0000004b] z-50  fixed ">
      <h1
        onClick={() => handlePageClick("home")}
        className="text-2xl font-bold text-white font-[special] cursor-pointer ]"
      >
        Caio Graco - Roza
      </h1>
      <span
        className="block lg:hidden text-[2rem] cursor-pointer text-white absolute right-5 top-5"
        onClick={toggleMobileMenu}
      >
        ☰
      </span>

      <RenderDialog
        toggleMobileMenu={toggleMobileMenu}
        renderNavLinks={renderNavLinks}
      />

      <nav className={`flex justify-between items-center font-[secondary] `}>
        <ul
          className={`hidden lg:flex  w-[300px] lg:w-4/5 lg:text-ellipsis  justify-between items-center text-white font-extrabold  `}
        >
          {renderNavLinks()}
        </ul>
      </nav>
      <span className="hidden lg:block">
        <Nav />
      </span>
    </header>
  );
};

export default Header;
