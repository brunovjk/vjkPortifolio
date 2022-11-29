import vjknftAnnotationLarge from 'assets/minting-steps-large.gif';
import vjknftAnnotationPlaceholder from 'assets/automation-intro-placeholder.jpg';
import vjknftAnnotation from 'assets/minting-steps.gif';
import vjknftAppLarge from 'assets/automation-intro-large.gif';
import vjknftAppPlaceholder from 'assets/automation-intro-placeholder.jpg';
import vjknftApp from 'assets/automation-intro.gif';
import vjknftBackgroundBarLarge from 'assets/group-contracts-large.jpg';
import vjknftBackgroundBarPlaceholder from 'assets/group-contracts-placeholder.jpg';
import vjknftBackgroundBar from 'assets/group-contracts.jpg';
import vjknftBackgroundLarge from 'assets/slice-background.jpg';
import vjknftBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import vjknftBackground from 'assets/slice-background.jpg';
import vjkNftMintButtonLarge from 'assets/vjknft-mint-button.jpg';
import vjkNftMintButtonPlaceholder from 'assets/vjknft-mint-button-placeholder.jpg';
import vjkNftMintButton from 'assets/vjknft-mint-button.jpg';
import vjkNftCollectionLarge from 'assets/vjknft-nft-collection.jpg';
import vjkNftCollectionPlaceholder from 'assets/vjknft-nft-collection-placeholder.jpg';
import vjkNftCollection from 'assets/vjknft-nft-collection.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './VjkNFT.module.css';

const title = 'Automatic NFT Generator';
const description =
  'Chainlink Automation enables conditional execution of your smart contracts functions through a hyper-reliable and decentralized automation platform that uses the same external network of node operators that secures billions in value.';
const roles = ['React', 'Solidity', 'OpenZeppelin', 'ChainLink', 'UniSwap'];

export const VjkNFT = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.vjknft}>
        <ProjectBackground
          src={vjknftBackground}
          srcSet={`${vjknftBackground.src} 1280w, ${vjknftBackgroundLarge.src} 2560w`}
          placeholder={vjknftBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://vjknft.web.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[vjknftApp, vjknftAppLarge]}
              placeholder={vjknftAppPlaceholder}
              alt="The VjkNFT web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>GOALS</ProjectSectionHeading>
              <ProjectSectionText>
                - Group of smart contracts, which will be automated by one contract:
                VjkNFT.sol.
              </ProjectSectionText>
              <ProjectSectionText>
                - Web application to interact (mint button, and steps to follow the
                automation) and display this contract collection.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[vjkNftCollection, vjkNftCollectionLarge]}
                placeholder={vjkNftCollectionPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[vjkNftMintButton, vjkNftMintButtonLarge]}
                placeholder={vjkNftMintButtonPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>SPECIFICATIONS</ProjectSectionHeading>
              <ProjectSectionText>
                Swaper.sol: Contract responsible for swapping Wrapped native token for
                ChainLink token. All automation of our software is done using tools
                supported by ChainLink. Before starting any process, we need ChainLink
                Tokens.
              </ProjectSectionText>
              <ProjectSectionText>
                APIConsumer.sol: Contract responsible for interviewing Kenny West, and
                returning us an epic quote, hehe.
              </ProjectSectionText>
              <ProjectSectionText>
                VRF.sol: Contract responsible for requesting random numbers using
                ChainLink VRF, with those numbers, the same contract creates an unique
                SVG.
              </ProjectSectionText>
              <ProjectSectionText>
                VjkNFT.sol: Main contract responsible for automating the process and
                storing the entire collection of NFTs and remaining ChainLink tokens.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[vjknftBackgroundBar, vjknftBackgroundBarLarge]}
                  placeholder={vjknftBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 51px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[vjknftAnnotation, vjknftAnnotationLarge]}
                  placeholder={vjknftAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 147px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>MILESTONES</ProjectSectionHeading>
              <ProjectSectionText>
                - Create and test each contract individually.
              </ProjectSectionText>
              <ProjectSectionText>
                - Make them work as one. After each deployment, ownership of each contract
                is transferred to the main contract, so only VjkNFT.sol can call the
                others contracts.
              </ProjectSectionText>
              <ProjectSectionText>
                - The application will be divided into two parts:
              </ProjectSectionText>
              <ProjectSectionText>
                The first basically consists of a mint button, and steps to follow the
                automation, which is linked to the wallet browser provider.
              </ProjectSectionText>
              <ProjectSectionText>
                And another session, here we use QuickNode, to expose all the pieces in
                the collection, making it possible for anyone to see it, even if you don`t
                have a wallet installed.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>CONSIDERATIONS</ProjectSectionHeading>
              <ProjectSectionText>
                This project was made with a focus on Contracts, Token interactions and
                events, as how we can do it automatically, however the SVG creation still
                needs optimization, just creating a simple SVG and storing on chain takes
                a lot of gas.
              </ProjectSectionText>
              <ProjectSectionText>
                Our next milestone would be to integrate with some storage tool. I`m doing
                some testing with FileCoin, and it looks very promising.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
