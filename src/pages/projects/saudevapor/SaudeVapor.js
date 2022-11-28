import saudevaporBackgroundLarge from 'assets/saudevapor-background.jpg';
import saudevaporBackgroundPlaceholder from 'assets/saudevapor-background-placeholder.jpg';
import saudevaporBackground from 'assets/saudevapor-background.jpg';
import saudevaporArticlesLarge from 'assets/saudevapor-articles.png';
import saudevaporArticlesPlaceholder from 'assets/saudevapor-articles-placeholder.png';
import saudevaporArticles from 'assets/saudevapor-articles.png';
import saudevaporCandyMachineLarge from 'assets/saudevapor-candy-machine.png';
import saudevaporCandyMachinePlaceholder from 'assets/saudevapor-candy-machine-placeholder.png';
import saudevaporCandyMachine from 'assets/saudevapor-candy-machine.png';
import saudevaporBackgroundFooterLarge from 'assets/saudevapor-background-footer.jpg';
import saudevaporBackgroundFooterPlaceholder from 'assets/saudevapor-background-footer-placeholder.jpg';
import saudevaporBackgroundFooter from 'assets/saudevapor-background-footer.jpg';
import saudevaporDashboardLarge from 'assets/saudevapor-dashboard.png';
import saudevaporDashboardPlaceholder from 'assets/saudevapor-dashboard-placeholder.png';
import saudevaporDashboard from 'assets/saudevapor-dashboard.png';
import saudevaporLoginLarge from 'assets/saudevapor-login.png';
import saudevaporLoginPlaceholder from 'assets/saudevapor-login-placeholder.png';
import saudevaporLogin from 'assets/saudevapor-login.png';
import saudevaporSearchLarge from 'assets/saudevapor-search.png';
import saudevaporSearch from 'assets/saudevapor-search.png';
import saudevaporNftLearnMoreLarge from 'assets/saudevapor-nft-learn-more.png';
import saudevaporNftLearnMore from 'assets/saudevapor-nft-learn-more.png';
import saudevaporContactLarge from 'assets/saudevapor-contact.png';
import saudevaporContact from 'assets/saudevapor-contact.png';
import slidePlaceholder from 'assets/saudevapor-search-placeholder.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Link } from 'components/Link';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './SaudeVapor.module.css';

const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));

const title = 'SaudeVapor';
const description =
  'Although it is a real project I used, what I believe to be, the current Brazilian scenario of products derived from the Cannabis plant as Identity for several projects during my learning journey. From my first HelloWorld.html to Cross-Chain Applications.';
const roles = [
  'Project management',
  'UX/UI Design',
  'React',
  'Cloud',
  'DAO Proposal cycle',
  'Solana Programs',
];

export function SaudeVapor() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={[saudevaporBackground, saudevaporBackgroundLarge]}
          placeholder={saudevaporBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://saudevapor.com/"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>GOALS</ProjectSectionHeading>
              <ProjectSectionText>
                - Brand Identity, referral links:{' '}
                <Link href={'https://loja.saudevapor.com'}>loja.saudevapor.com</Link>{' '}
                (deprecated).
              </ProjectSectionText>
              <ProjectSectionText>
                - Application to store and display content, images, articles and author
                reference link.
              </ProjectSectionText>
              <ProjectSectionText>
                -{' '}
                <Link href={'https://saudevapor.com/nft-collection'}>
                  Cannabis Compounds:
                </Link>{' '}
                Unique card collection, is a gift, is informative, is collectible and most
                importantly offers holders voting rights in our DAO.
              </ProjectSectionText>
              <ProjectSectionText>
                - Creation of a DAO for feeding, disseminating and maintaining this
                application.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[saudevaporArticles, saudevaporArticlesLarge]}
                placeholder={saudevaporArticlesPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[saudevaporCandyMachine, saudevaporCandyMachineLarge]}
                placeholder={saudevaporCandyMachinePlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>OUR VISION</ProjectSectionHeading>
              <ProjectSectionText>
                With a mission of building a Network of People interested in creating and
                consuming content about the most diverse uses of cannabis, we want to
                create a DAO at Solana, to then disseminate content to other chains. 49
                NFTs, representing 49 chemical components of cannabis: Cannabis Compound,
                which will give voting power to its holder. Initially, we do not have
                proposals that need to be voted on, the main objective is to bring
                together people interested in the subject, and willing to help not only
                create, but also consume and share content about cannabis, harm reduction
                and health research.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[saudevaporDashboard, saudevaporDashboardLarge]}
                  placeholder={saudevaporDashboardPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 51px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[saudevaporLogin, saudevaporLoginLarge]}
                  placeholder={saudevaporLoginPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 147px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>MILESTONES</ProjectSectionHeading>
              <ProjectSectionText>
                Database: We use Google Cloud Storage. Later, with the help of new
                members, we will migrate this content to decentralized hosting.
              </ProjectSectionText>
              <ProjectSectionText>
                Web Application: Responsible for displaying and adding new texts, images
                (dashboard) and minting NFTs (Metaplex Candy Machine). Here we use Google
                Cloud Authentication to create users and restrict dashboard access. Later
                this authentication (basically authorization to post articles) will be
                done by the same tokens generated by our candy machine.
              </ProjectSectionText>
              <ProjectSectionText>
                NFT Collection: Cannabis Compounds. Created using metaplex. Until then we
                only exist on Devnet, but we are looking for funds to deploy to Solana
                mainnet. We believe that we can bring together people who are really
                willing to make a difference.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Carousel
              placeholder={slidePlaceholder}
              images={[
                {
                  srcSet: [saudevaporSearch, saudevaporSearchLarge],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Saudevapor Search page.',
                },
                {
                  srcSet: [saudevaporNftLearnMore, saudevaporNftLearnMoreLarge],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Saudevapor Nft Learn More page',
                },
                {
                  srcSet: [saudevaporContact, saudevaporContactLarge],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Saudevapor Contact page.',
                },
              ]}
              width={1366}
              height={629}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={[saudevaporBackgroundFooter, saudevaporBackgroundFooterLarge]}
              placeholder={saudevaporBackgroundFooterPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>CONSIDERATIONS</ProjectSectionHeading>
              <ProjectSectionText>
                Although it is a relatively simple project, I followed several processes
                to arrive at this version. Going through several concepts, such as SQL,
                Cloud Functions, Project Management, Marketing, Design, HTML, CSS, API
                calls, Token Governance, Rust, Solana Programs, among others, I learned a
                lot.
              </ProjectSectionText>
              <ProjectSectionText>
                I really believe it is a relevant project for our society, and with the
                help of others we can improve a lot, and create a strong community and a
                relevant application.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
