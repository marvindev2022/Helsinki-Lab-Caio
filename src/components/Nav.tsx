import twitter from "../assets/twitter.svg";
import twitterDark from "../assets/twitter-dark.svg";
import researchgate from "../assets/researchgate.svg";
import gmail from "../assets/gmail.svg";
import orcid from "../assets/orcid.svg";
import scholar from "../assets/scholar.svg";
import researchgateDark from "../assets/researchgate-dark.svg";
import gmailDark from "../assets/gmail-dark.svg";
import orcidDark from "../assets/orcid-dark.svg";
import scholarDark from "../assets/scholar-dark.svg";
import { Link } from "react-router-dom";

export default function Nav({ black }: any) {
  return (
    <nav className="flex justify-between items-center gap-8  p-5">
      <Link target="_blank" to="https://twitter.com/marvindev2022">
        <img
          className="cursor-pointer w-8 h-8"
          src={black ? twitterDark : twitter}
          alt="twitter"
        />
      </Link>
      <Link target="_blank" to="https://www.researchgate.com/in/marcus-roza/">
        <img
          className="cursor-pointer w-8 h-8"
          src={black ? researchgateDark : researchgate}
          alt="researchgate"
        />
      </Link>
      <Link
        target="_blank"
        to="https://docs.google.com/document/d/10aU8ROLUuQvDvtoNuJvvC8p1GKYZJQrWzwO8fJKWLjQ/edit"
      >
        <img
          className="cursor-pointer w-8 h-8"
          src={black ? gmailDark : gmail}
          alt="curriculo"
        />
      </Link>
      <Link target="_blank" to="https://wa.me/551197449-8322">
        <img
          className="cursor-pointer w-8 h-8"
          src={black ? orcidDark : orcid}
          alt="orcid"
        />
      </Link>
      <Link target="_blank" to="https://wa.me/551197449-8322">
        <img
          className="cursor-pointer w-8 h-8"
          src={black ? scholarDark : scholar}
          alt="orcid"
        />
      </Link>
    </nav>
  );
}
