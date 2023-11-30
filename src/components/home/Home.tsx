import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RenderHero from "../HeroSection";
import {
  HomeSection,
  ProfileSection,
  DescriptionSection,
  HireMeButton,
} from "./functions";

const RenderHome = (): JSX.Element => {
  const navigate = useNavigate();

  const [profileRef, profileInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  });

  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  });

  const [articleRef, articleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <HomeSection>
      <RenderHero />
      <div className="w-full h-full flex flex-col sm:flex-row sm:relative justify-center items-center rounded-full bg-black-50 py-10 xl:py-0  xl:px-16  ">
        <ProfileSection
          initial={{ opacity: 0 }}
          animate={articleInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          ref={profileRef}
          inView={profileInView}
        />
        <DescriptionSection
          initial={{ opacity: 0 }}
          animate={articleInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          ref={descriptionRef}
          inView={descriptionInView}
        >
          <p className="w-10/12  text-justify xl:text-start font-bold text-white px-5 py-5 xl:py-0 xl:pl-2 xl:pr-32 xl:text-[1.099rem]">
            <strong className="text-[1.099rem] text-center">
              Caio Graco - Roza
            </strong>{" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            laudantium, architecto tenetur veritatis maxime quas consequatur in.
            Provident quos voluptatum alias ad, esse quia, placeat tempora
            laboriosam
          </p>
          <p className="w-10/12 text-justify  xl:text-start font-bold text-white px-5 pb-5 xl:py-0 xl:pl-2 xl:pr-32 xl:text-[1.099rem]">
            Lorem, ipsum dolor.{" "}
            <em className="xl:text-[1.099rem]">
              Lorem ipsum dolor sit amet. <strong> Leaders</strong>{" "}
            </em>
            and Doloremque mollitia aliquid, ea voluptatem hic dolore sed
            voluptatum animi cum et porro illo impedit dolor numquam expedita
            aperiam soluta! Maxime blanditiis quisquam quas ratione quod
            corrupti vero voluptatum nemo
          </p>
          <HireMeButton onClick={() => navigate("/contact")} />
        </DescriptionSection>
      </div>
      <motion.article
        ref={articleRef}
        initial={{ opacity: 0 }}
        animate={articleInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full h-full text-black mt-52 sm:mt-5 sm:m-5 flex flex-col gap-5  justify-center items-center "
      >
        <p className="w-10/12  text-justify font-light  px-5  pt-5 xl:pl-2 xl:pr-32  xl:text-xl">
          I’m a science communicator and science policy advocate specializing in
          neuroscience. Through several projects in policy, writing, speaking,
          outreach, and multimedia, I share science with the goal of advocating
          for diverse and inclusive STEM education and promoting a more informed
          global community.
        </p>
        <ul className="w-10/12 text-justify text-base font-light px-5 pb-5 xl:pt-0 xl:pl-2 xl:pr-32 xl:text-xl  list-disc flex flex-col gap-5">
          <li>
            As the Public Relations Manager at the National Science Policy
            Network, I create accessible written and visual content including
            feature articles, weekly email newsletters, graphics, social media
            campaigns, and videos to execute the organization’s digital
            communications strategy, including branding, storytelling, and
            marketing for events and opportunities. Previously, as the Public
            Engagement & Communications Committee Chair, I led a team in
            communicating science policy topics and engaging our members in
            professional development opportunities related to science
            communication. I have also led advocacy projects as an Early Career
            Policy Ambassador with the Society for Neuroscience and have written
            about science policy through Duke University.
          </li>
          <li>
            My science writing has appeared in Scientific American, Massive
            Science, and other outlets, and has won several science
            communication awards.
          </li>
          <li>
            I lead opportunities for scientists to develop their communication
            skills, such as by organizing the ComSciCon-Triangle 2021 conference
            and speaking about science policy and communication at workshops and
            seminars.
          </li>
          <li>
            I engage in public outreach through community organizations. As an
            undergraduate at Carnegie Mellon University, I founded a chapter of
            Nu Rho Psi (the national neuroscience honor society) and led our
            chapter through 30+ annual hours of educational outreach in the
            community. For my leadership as the founding president of this
            group, I was recognized as the 2018 National Outstanding Member of
            the Year by the national organization.
          </li>
          <li>
            I create multimedia about science, such as The Gastronauts Podcast
            for which I edited, produced, and composed the theme music to engage
            listeners from 45+ countries.
          </li>
          <li>
            By day, I’m a Ph.D. Candidate in Neurobiology at Duke University,
            where I study how the brain combines vision and hearing. I hold a
            B.S. in Neuroscience and a B.S. in Cognitive Psychology from
            Carnegie Mellon University.
          </li>
        </ul>
      </motion.article>
    </HomeSection>
  );
};

export default RenderHome;
