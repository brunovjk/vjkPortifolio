<!DOCTYPE html>
<title>MINDSDynamicRewardSystem</title>
<style>
div.container {
background-color: #ffffff;
}
div.container p {
font-family: Arial;
font-size: 14px;
font-style: normal;
font-weight: normal;
text-decoration: none;
text-transform: none;
color: #000000;
background-color: #ffffff;
}
</style>

<div class="container">
<p>Settings:</p>
<p>address brainManagementContractAddress: </p>
<p>Avalanche: 0x302474f6671439fec92a03f970cf90a758168bed</p>
<p>BSC Testnet: 0x240248628B7B6850352764C5dFa50D1592A033A8</p>
<p>address chainlinkTokenAddress: https://docs.chain.link/resources/link-token-contracts</p>
<p>address chainlinkOracleAddress: https://docs.chain.link/any-api/testnet-oracles</p>
<p>address registrarAddress: https://docs.chain.link/chainlink-automation/supported-networks/</p>
<p>address registryAddress: https://docs.chain.link/chainlink-automation/supported-networks/</p>
<p>uint32 _gasLimitFirstUpkeep: 8000000 https://docs.chain.link/chainlink-automation/automation-economics/</p>
<p>uint32 _gasLimitSecondUpkeep: 8000000 https://docs.chain.link/chainlink-automation/automation-economics/</p>
<p>	</p>
<p>	</p>
<p>MINDSDynamicRewardSystem Functions</p>
<p>Allow withdraw of Link tokens from the contract</p>
<p>function withdrawLink() public onlyOwner</p>
<p></p>
<p>      	Allow withdraw of Link tokens from the contract</p>
<p>There is a 50 block delay once an Upkeep has been canceled before funds can be withdrawn.</p>
<p>No form of ownership has been configured, BiggerMINDS permission contracts must be used.</p>
<p></p>
<p>Check contract's Link token balance</p>
<p>function contractLinkBalance() public view returns (uint256 balance)</p>
<p></p>
<p>balance = contract's Chainlink token balance.</p>
<p>Balance Upkeep</p>
<p>    function getUpkeepBalance(uint256 _upkeepID)</p>
<p>        public</p>
<p>        view</p>
<p>        returns (uint96 balance)</p>
<p></p>
<p>_upkeepID = The ID refers to a unique, UpKeep assigned ID </p>
<p></p>
<p>balance = Each Upkeep has a balance</p>
<p></p>
<p>Add funds to Upkeep</p>
<p>function fundUpkeep(uint256 _upkeepID, uint96 _amount) public</p>
<p></p>
<p>_upkeepID = The ID refers to a unique, UpKeep assigned ID</p>
<p></p>
<p>_amount = Link Token amount to fund Upkeep</p>
<p></p>
<p>Cancel Upkeep</p>
<p>function cancelUpkeep(uint256 _upkeepID) public onlyOwner</p>
<p></p>
<p>_upkeepID = The ID refers to a unique, UpKeep assigned ID</p>
<p></p>
<p></p>
<p></p>
<p>Withdraw Upkeep Funds</p>
<p>function withdrawUpkeepFunds(uint256 _upkeepID) private</p>
<p></p>
<p>Can only be called by this contract.</p>
<p>To withdraw funds, the Upkeep administrator has to cancel the Upkeep first. There is a 50 block delay once an Upkeep has been canceled before funds can be withdrawn.</p>
<p></p>
<p>_upkeepID = The ID refers to a unique, UpKeep assigned ID</p>
<p></p>
<p>Calculate RewardsPerSecond according to current percentage change.</p>
<p>    function calculateRewardsPerSecond(int256 _performance)</p>
<p>        private</p>
<p>        pure</p>
<p>        returns (uint256 _rewardsPerSecond</p>
<p></p>
<p>Return daily rewards in 'per the second' format: value in Wei / 86400</p>
<p></p>
<p>_performance = Current percentage change is a rolling percentage of change over 24 hours. The last 24-hour percentage change is captured and saved. The next 24-hour percentage change is recorded and then added to the previous day.</p>
<p></p>
<p>_rewardsPerSecond = Rewards per the second</p>
<p></p>
<p>    </p>
<p>Create a Chainlink request to retrieve API response</p>
<p>function requestLastPriceChange() private returns (bytes32 requestId)</p>
<p></p>
<p>Find the target data, then multiply by 1000000000000000000 (to remove decimal places from data).</p>
<p></p>
<p>requestId = ID to referent HTTP GET requests to external API</p>
<p></p>
<p>Receive the response in the form of int256</p>
<p>    function fulfill(bytes32 _requestId, int256 _lastPriceChange)</p>
<p>        public</p>
<p>        recordChainlinkFulfillment(_requestId)</p>
<p></p>
<p>We are going to use this function, which is called by a ChainLink node, to update performance and rewardsPerSecond.</p>
<p></p>
<p>_requestId = ID to referent HTTP GET requests to external API</p>
<p></p>
<p>_lastPriceChange  = Response to our request: </p>
<p>"get", "https://api.coingecko.com/api/v3/coins/biggerminds"</p>
<p>"path", "market_data,price_change_percentage_24h"</p>
<p></p>
<p>Register an Upkeep</p>
<p>    function registerAndPredictID(</p>
<p>        string memory name,</p>
<p>        uint32 gasLimit,</p>
<p>        uint96 amount</p>
<p>    ) private returns (uint256 upkeepID)</p>
<p></p>
<p>We need to keep track of the Upkeep ID as your contract will use this to subsequently interact with the Chainlink Automation registry.</p>
<p></p>
<p>name = Name to identify Upkeep</p>
<p></p>
<p>gasLimit  = Minimum gas used to perform 'perfomUpkeep'</p>
<p></p>
<p>amount = Amount to found Upkeep (The minimum amount is 5 LINK)</p>
<p></p>
<p>upkeepID = The ID refers to a unique, UpKeep assigned ID</p>
<p></p>
<p>CheckUpkeep Function</p>
<p>    function checkUpkeep(bytes calldata checkData)</p>
<p>        external</p>
<p>        view</p>
<p>        override</p>
<p>        returns (bool upkeepNeeded, bytes memory performData)</p>
<p></p>
<p>Contains the logic that will be executed off-chain  to see if performUpkeep should be executed. After you register the contract as an upkeep, the Chainlink Automation Network simulates our checkUpkeep off-chain during every block to determine  if the contract should perform an action.</p>
<p></p>
<p>checkData = ABI-encoded fixed and specified at Upkeep registration and used in every checkUpkeep.</p>
<p></p>
<p>upkeepNeeded  =  Boolean that when True will trigger the on-chain performUpkeep call</p>
<p></p>
<p>performData = Bytes that will be used as input parameter when calling performUpkeep. If you would like to encode data to decode later, try abi.encode.</p>
<p></p>
<p>PerformUpkeep Function</p>
<p>  function performUpkeep(bytes calldata performData) external override</p>
<p></p>
<p>Will be executed on-chain when checkUpkeep returns true</p>
<p> </p>
<p>performData = Data which was passed back from the checkData simulation. If it is encoded, it can easily be decoded into other types by calling abi.decode. This data should always be validated against the contract’s current state.</p>
<p></p>
<p></p>
<p>Initiate Automation Function</p>
<p> function initiateAutomation() public onlyOwner</p>
<p></p>
<p>Chainlink automation allows the protocol to run on autopilot without human intervention to adjust daily rewards. We call this function once, and after just guarantee that the last upkeep is always funded.</p>
<p>     * Set gasLimit at transaction time at least to 700000 when calling this function.</p>
<p></p>
<p>Turn off Function</p>
<p>function turnOffAutomation() public onlyOwner</p>
<p></p>
<p>We should wait a delay of 50 blocks to withdraw the balance from Upkeeps.</p>
<p></p>
</div>

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
