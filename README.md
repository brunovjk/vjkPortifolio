### IB Tasks

- [ ] Check for security flaws: i.e., Only Owner functions and anything that can lead to an outsider exploiting. Once checked, add the necessary code to ensure safety and that only owner is allowed to perform such actions.
- [ ] Add everything necessary to be able to implement our current smart-contracts. I.e., token or brainsmanagement.
- [ ] Can the table implemented on CalculateRewardPerChange function to determine 24hrs be improved?
- [ ] Review the code to ensure it meets the instructions per this [google docs](https://docs.google.com/document/u/0/d/1OWWFLzC-qi5yQWTbGCaTOckSxIvRNPev_BiiZfQYJ_Q/edit).
- [ ] Is there a way to implement a fail-safe? If the Chainlink Automation fails to call, how can the code re-run the call until it's performed?
- [ ] Upgrade and deploy the token contract or the necessary contract with chainlink implemented. [Do not remove the ability to update manually]

## 💻 Automation for BRAIN+

Task: To create an automated dynamic reward system using Chainlink automation.

Overview: The automated dynamic reward system will track MIND+ performance and adjust the rewards based on the percent change using Chainlink automation.

Problem: The current system is a spreadsheet that does all the calculations, and I have to call the contract and change the rewards manually. It works, but I’m human, and sometimes I forget.

Solution: Chainlink automation. This will allow the protocol to run on autopilot without human intervention to adjust daily rewards.

## Automation for BRAIN+ Solution

Our contract performs two automations:

- First, our contract makes the request for the BRAIN+ price variation in the last 24 hours.

- Second automation uses this updated value to calculate daily rewards and send to Brain Manager.

## 🚀 Deploy Automation for BRAIN+ Contract

Our request and automation are performed using Chainlink tools, so at the time of deploy we need to pass the Chainlink addresses according to the network.

These addresses refer to:

- [Chainlink Token Address](https://docs.chain.link/resources/link-token-contracts)
- [Chainlink Oracle Address](https://docs.chain.link/any-api/testnet-oracle)
- [Registrar Address](https://docs.chain.link/chainlink-automation/supported-networks)
- [Registry Address](https://docs.chain.link/chainlink-automation/supported-networks)

## ☕ Initiate Automation for BRAIN+

To use Automation for BRAIN+, follow these steps:

- First you must Fund your Contract with [ERC-677 LINK](https://docs.chain.link/resources/link-token-contracts).

  Initially we will need at least 12 Link Tokens:

  - 5 will be used to register the first automation, this balance will be available in the generated Upkeep.
  - 5 more links for the second automation.
  - 2 remaining links were left in the contract to be used in the price API call (0.1 per call).

- After our contract is funded, we will call the 'initiateAutomation' function.
  The minimum 'gasLimit' you need to set for the automation functions to work is 800000.

## 📫 Maintain Automation for BRAIN+

The 'initiateAutomation' function register two Upkeeps, they will be stored in the contract as a public variables:

    ```
    uint256 public firstUpkeepID;
    uint256 public secondUpkeepID;
    ```

Together with the CONTRACT ADDRESS itself, ensure that they are always Link balance so that the automation does not stop.

You can check using the 'getUpkeepBalance' and 'contractLinkBalance' public functions.
If they run without Link. The contract just send more Link to his address. The upkeep you can add balance using the function 'fundUpkeep'.

To better find these values ​​later: [Automation Pricing](https://docs.chain.link/chainlink-automation/automation-economics/)

To turn off our machine use the function 'turnOffAutomation'.
This function cancels our Upkeeps, and moves them to an Upkeeps list to remove the remaining balance.

A period of 50 confirmations should be expected before trying to use the 'withdrawLink' function.
This function removes all links, both in the contract and from canceled Upkeeps, and sends it to the contract administrator.

## 🤝 Functions Automation for BRAIN++

- function getUpkeepBalance(uint256 upkeepID) public view returns (uint96 balance)
     * Balance Upkeep

    _upkeepID = The ID refers to a unique, UpKeep assigned ID 

    balance = Each Upkeep has a balance

- function fundUpkeep(uint256 upkeepID, uint96 amount) public
     * Add funds to Upkeep

    _upkeepID = The ID refers to a unique, UpKeep assigned ID

    _amount = Link Token amount to fund Upkeep

- function cancelUpkeep(uint256 upkeepID) public onlyOwner
     * Cancel Upkeep

    _upkeepID = The ID refers to a unique, UpKeep assigned ID

- function withdrawUpkeepFunds(uint256 upkeepID) private
     * Withdraw Upkeep Funds

    _upkeepID = The ID refers to a unique, UpKeep assigned ID

- function withdrawLink() public onlyOwner
     * Allow withdraw of Link tokens from the contract
     * There is a 50 block delay once an Upkeep has been cancelled before funds
     * can be withdrawn.

- function contractLinkBalance() public view returns (uint256 balance)
     * Check contract's Link token balance

    balance = contract's Chainlink token balance.

- function calculateRewardsPerSecond(int256 performance) internal pure returns (uint256 rewardsPerSeconds)
     * Calculate RewardsPerSecond according to current percentage change.
     * Return daily rewards in 'per the second' format: value in Wei / 86400

     _performance = Current percentage change is a rolling percentage of change over 24 hours. The last 24-hour percentage change is captured and saved. The next 24-hour percentage change is recorded and added to the previous day.

    _rewardsPerSecond = Rewards per the second

- function requestLastPriceChange() private returns (bytes32 requestId)
     * Create a Chainlink request to retrieve API response, find the target
     * data, then multiply by 1000000000000000000 (to remove decimal places from
     * data).

     requestId = ID to referent HTTP GET requests to external API

- function fulfill(bytes32 requestId, int256 lastPriceChange) public recordChainlinkFulfillment(requestId)
     * Receive the response in the form of int256
     * We are going to use this function, which is called by a ChainLink node, to
     * update performance and rewardsPerSecond.

    _requestId = ID to referent HTTP GET requests to external API

    _lastPriceChange  = Response to our request:

- function registerAndPredictID( string memory name, uint32 gasLimit, uint96 amount ) private returns (uint256 upkeepID)
     * We need to keep track of the Upkeep ID as your contract will use this to
     * subsequently interact with the Chainlink Automation registry.

     name = Name to identify Upkeep

    gasLimit  = Minimum gas used to perform 'perfomUpkeep'

    amount = Amount to found Upkeep (The minimum amount is 5 LINK)

    upkeepID = The ID refers to a unique, UpKeep assigned ID

- function checkUpkeep(bytes calldata checkData) external view override returns (bool upkeepNeeded, bytes memory performData)
     * `checkUpkeep` function contains the logic that will be executed off-chain
     * to see if performUpkeep should be executed.
     * After you register the contract as an upkeep, the Chainlink Automation
     * Network simulates our checkUpkeep off-chain during every block to determine
     * if the contract should perform an action.
     * This cycle repeats until the upkeep is cancelled or runs out of funding.


    checkData = ABI-encoded fixed and specified at Upkeep registration and used in every checkUpkeep.

    upkeepNeeded  =  Boolean that when True will trigger the on-chain performUpkeep call

    performData = Bytes that will be used as input parameter when calling performUpkeep. If you would like to encode data to decode later, try abi.encode.

- function performUpkeep(bytes calldata performData) external override
     * performUpkeep function will be executed on-chain when checkUpkeep returns
     * true

     performData = Data which was passed back from the checkData simulation. If it is encoded, it can easily be decoded into other types by calling abi.decode. This data should always be validated against the contract’s current state.

- function initiateAutomation() public onlyOwner
     * Chainlink automation allow the protocol to run on autopilot without human
     * intervention to adjust daily rewards.
     * We call this function once, and after just garantee that the last upkeep is
     * alaways funded.

     Set gasLimit at transaction time at least to 800000 when calling this function.

- function turnOffAutomation() public onlyOwner
     * Turn off machine.
     * We should wait a delay of 50 blocks to withdraw balance from Upkeeps after
     * turn off.

## 📝 License

This project is under license. See the [LICENSE](LICENSE.md) file for more details.

[⬆ back to top](#Automation for BRAIN+)<br>


<img src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png" min-width="400px" max-width="400px" width="400px" align="right" alt="Computador iuriCode">

<p align="left"> 
  <strong>Bruno Rocha</strong> an Brazilian Web3 Developer.<br>
</p>

<p align="left">
  🦄 <strong>UI components - Object Oriented Programming</strong>
</p>

<p align="left">
  💼 Main tools: <strong>NODE.js - React - Solidity - Ethers.js - Hardhat - Solana/web3.js</strong>
</p>

<p align="left">
  💌 brunovjk@gmail.com
</p>
<p align="left">
  💼 https://brunovjk.com
</p>

<p align="left">
  💻 https://www.linkedin.com/in/brunovjk/
</p>
