import { useState } from "react";
import RenderBio from "../components/Bio";
import RenderWriting from "../components/Writing";
import RenderSpeaking from "../components/Speaking";
import RenderMultimedia from "../components/Multimedia";
import RenderPolicyAndAdvocacy from "../components/PolicyAndAdvocacy";
import RenderScience from "../components/Science";
import RenderPress from "../components/Press";
import RenderContact from "../components/Contact";
import PageTransition from "../animation/PageTransition";
import Header from "../components/Header";
import RenderHome from "../components/Home";

function App(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const pages: { [key: string]: JSX.Element } = {
    home: <RenderHome />,
    bio: <RenderBio />,
    writing: <RenderWriting />,
    speaking: <RenderSpeaking />,
    multimedia: <RenderMultimedia />,
    policyAndAdvocacy: <RenderPolicyAndAdvocacy />,
    science: <RenderScience />,
    press: <RenderPress />,
    contact: <RenderContact />,
  };

  const handleSetSelectedPage = (page: string): void => {
    setSelectedPage(page);
  };
  const windowScroll = () => {
    const header = document.querySelector("header");
    const scroll = window.scrollY;
  
    if (scroll < 50) {
      header?.classList.remove("bg-primary");
    } else {
      header?.classList.add("bg-primary");
    }
  };
  
  window.onscroll = () => {
    windowScroll();
  };
  
  return (
    <main className="flex flex-col max-w-min overflow-x-hidden ">
      <Header
        selectedPage={selectedPage}
        setSelectedPage={handleSetSelectedPage}
      />
      <PageTransition children={pages[selectedPage]} />
    </main>
  );
}

export default App;
