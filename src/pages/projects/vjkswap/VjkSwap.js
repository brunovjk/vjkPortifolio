import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import utilsMobileViewDarkLarge from 'assets/vjkswap-send-swap-history-dark.jpg';
import utilsMobileViewDarkPlaceholder from 'assets/vjkswap-send-swap-history-dark-placeholder.jpg';
import utilsMobileViewDark from 'assets/vjkswap-send-swap-history-dark.jpg';
import utilsMobileViewLightLarge from 'assets/vjkswap-send-swap-history-light.jpg';
import utilsMobileViewLightPlaceholder from 'assets/vjkswap-send-swap-history-light-placeholder.jpg';
import utilsMobileViewLight from 'assets/vjkswap-send-swap-history-light.jpg';
import imageBalanceListDarkLarge from 'assets/vjkswap-balance-desktop-dark.png';
import imageBalanceListDarkPlaceholder from 'assets/vjkswap-balance-desktop-dark-placeholder.png';
import imageBalanceListDark from 'assets/vjkswap-balance-desktop-dark.png';
import imageBalanceListLightLarge from 'assets/vjkswap-balance-desktop-light.png';
import imageBalanceListLightPlaceholder from 'assets/vjkswap-balance-desktop-light-placeholder.png';
import imageBalanceListLight from 'assets/vjkswap-balance-desktop-light.png';
import functionListLarge from 'assets/functionList-large.jpg';
import functionListPlaceholder from 'assets/functionList-placeholder.jpg';
import functionList from 'assets/functionList.jpg';
import erc20AbiLarge from 'assets/erc20abi-large.jpg';
import erc20AbiPlaceholder from 'assets/erc20abi-placeholder.jpg';
import erc20Abi from 'assets/erc20abi.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
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
import styles from './VjkSwap.module.css';

const title = 'An ERC-20 Playground';
const description =
  'ERC-20 came about as an attempt to provide a common set of features and interfaces for token contracts in Ethereum. ERC-20 has many benefits, including allowing wallets to provide token balances for hundreds of different tokens and creating a means for exchanges to list more tokens by providing nothing more than the address of the token’s contract.';
const roles = [
  'Check balance',
  'Send token to other account or contract',
  'Swap any ERC20, if Uniswap pool avaible',
  'Check your history transactions',
  'Wrap and unWrap native tokens',
];

export const VjkSwap = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.vjkswap.brunovjk.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageBalanceListDark, imageBalanceListDarkLarge]
                  : [imageBalanceListLight, imageBalanceListLightLarge]
              }
              placeholder={
                isDark
                  ? imageBalanceListDarkPlaceholder
                  : imageBalanceListLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Balance list - desktop view."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>GOALS</ProjectSectionHeading>
            <ProjectSectionText>
              - Create an interface to interact with some common ERC20 functions: check
              Balance, Send, Wrap and unWrap, Swap (powered by Uniswap) and check
              transaction history.
            </ProjectSectionText>
            <ProjectSectionText>
              - Configure Uniswap protocol, to enable swapping on ERC20. Store initial
              list of common tokens on Ethereum, however any compatible ERC 20 token can
              be added to the app.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [utilsMobileViewDark, utilsMobileViewDarkLarge]
                  : [utilsMobileViewLight, utilsMobileViewLightLarge]
              }
              placeholder={
                isDark ? utilsMobileViewDarkPlaceholder : utilsMobileViewLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for the VjkSwap`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Specifications</ProjectSectionHeading>
              <ProjectSectionText>
                Initially we will only store some Ethereum Mainnet and Goerli address
                book, however it is possible to use with any EVM compatible network.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectTextRow center centerMobile noMargin>
          <ProjectSectionHeading>MILESTONES</ProjectSectionHeading>
        </ProjectTextRow>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>UX/UI</ProjectSectionHeading>
              <ProjectSectionText>
                - Create a UI to interact with ERC 20 contracts.
              </ProjectSectionText>
              <ProjectSectionText>
                - Store list of some popular ERC 20 tokens.
              </ProjectSectionText>
              <ProjectSectionText>
                - Button to add compatible ERC20 token.
              </ProjectSectionText>
              <ProjectSectionText>
                With web frameworks like ether js and a provider (we will use the
                extension wallet provider), we can interact with any smart contract, we
                just need the address and abi (list functions and parameters). Using the
                functions available in a ERC20 compatible contract, for example:
                balanceOf, transfer and event Transfer, we only need the address tokens we
                want to use.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              raised
              key={themeId}
              srcSet={[erc20Abi, erc20AbiLarge]}
              placeholder={erc20AbiPlaceholder}
              alt="we can interact with any smart contract, we
              just need the address and abi."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Pool providers</ProjectSectionHeading>
                <ProjectSectionText>
                  - Configure function list to enable ERC20 compatible token operations .
                </ProjectSectionText>
                <ProjectSectionText>
                  Uniswap is present on several networks, initially we will only store a
                  list of addresses from Ethereum mainnet and Goerli, however it is
                  possible to use any EVM compatible network, uniswap protocol will look
                  for the pools with enough tokens to perform the exchange.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[functionList, functionListLarge]}
                placeholder={functionListPlaceholder}
                alt="Configuration options for text."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>CONSIDERATIONS</ProjectSectionHeading>
              <ProjectSectionText>
                In our application it is possible to add compatibles ERC 20 tokens
                addresses, which would already allow our application to work on any
                compatible EVM network, but we need the Wrapper address, a contract
                responsible for enveloping native tokens of this network by ERC 20 Wrapped
                Tokens.
              </ProjectSectionText>
              <ProjectSectionText>
                A next milestone would be to create an Add Wrapper Address button, so that
                if the user wants to use our application on another network, he can
                manually add that Wrapper address. That would make our application
                completely EVM Cross-Chain compatible.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
