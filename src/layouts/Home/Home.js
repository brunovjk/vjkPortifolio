import saudevaporLatesCollectionLarge from 'assets/saudevapor-latest-collection.png';
import saudevaporLatesCollectionPlaceholder from 'assets/saudevapor-latest-collection-placeholder.png';
import saudevaporLatesCollection from 'assets/saudevapor-latest-collection.png';
import saudevaporCandyMachineLarge from 'assets/saudevapor-candy-machine.png';
import saudevaporCandyMachinePlaceholder from 'assets/saudevapor-candy-machine-placeholder.png';
import saudevaporCandyMachine from 'assets/saudevapor-candy-machine.png';

import vjkswapHeroLarge from 'assets/vjkswap-hero.jpg';
import vjkswapHeroPlaceholder from 'assets/vjkswap-hero-placeholder.jpg';
import vjkswapHero from 'assets/vjkswap-hero.jpg';
import vjkswapBalanceListMobileLarge from 'assets/vjkswap-balance-mobile.jpg';
import vjkswapBalanceListMobilePlaceholder from 'assets/vjkswap-balance-mobile-placeholder.jpg';
import vjkswapBalanceListMobile from 'assets/vjkswap-balance-mobile.jpg';

import vjknftNftPageLarge from 'assets/vjknft-nft-page.png';
import vjknftNftPagePlaceholder from 'assets/vjknft-nft-page-placeholder.png';
import vjknftNftPage from 'assets/vjknft-nft-page.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Developer', 'Dreamer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Blockchain Developer"
        description="Bruno Rocha Blockchain portfolio — Excited about the new world!"
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="VjkSwap - ERC20 Playground"
        description="An app to interact with some common ERC20 functions: check Balance, Send, Wrap and unWrap, Swap (powered by Uniswap) and check transaction history."
        buttonText1="Details"
        buttonLink1="/projects/vjkswap"
        buttonText2="Github"
        buttonLink2="https://github.com/brunovjk/vjkswap"
        model={{
          type: 'phone',
          alt: 'VjkSwap - ERC20 Playground',
          textures: [
            {
              srcSet: [vjkswapBalanceListMobile, vjkswapBalanceListMobileLarge],
              placeholder: vjkswapBalanceListMobilePlaceholder,
            },
            {
              srcSet: [vjkswapHero, vjkswapHeroLarge],
              placeholder: vjkswapHeroPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="vjkNFT - Automatic NFT Generator"
        description="A group of smart contracts, working together to create a single, unique NFT. Chainlink Automation enables conditional execution of your smart contracts functions."
        buttonText1="Details"
        buttonLink1="/projects/vjknft"
        buttonText2="Github"
        buttonLink2="https://github.com/brunovjk/vjknft"
        model={{
          type: 'laptop',
          alt: 'vjkNFT',
          textures: [
            {
              srcSet: [vjknftNftPage, vjknftNftPageLarge],
              placeholder: vjknftNftPagePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="SaudeVapor - A Real Project"
        description="The main purpose of this project is to Bring together People interested in Cannabis, Harm Reduction and Health Research, Using web3 Tools and Technologies."
        buttonText1="Details"
        buttonLink1="/projects/saudevapor"
        buttonText2="Github"
        buttonLink2="https://github.com/brunovjk/SaudeVapor"
        model={{
          type: 'phone',
          alt: 'SaudeVapor A Real Project',
          textures: [
            {
              srcSet: [saudevaporLatesCollection, saudevaporLatesCollectionLarge],
              placeholder: saudevaporLatesCollectionPlaceholder,
            },
            {
              srcSet: [saudevaporCandyMachine, saudevaporCandyMachineLarge],
              placeholder: saudevaporCandyMachinePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
