# riot-disperse

This is an implementation of the Disperse dApp originally written in 2018. Disperse is a tool for distributing Ethereum or ERC-20 tokens to multiple addresses in a single transaction.

## Overview

Disperse allows users to:
- Send ETH to multiple addresses in one transaction
- Send ERC-20 tokens to multiple addresses in one transaction
- Save gas costs compared to sending individual transactions

## Smart Contract

The implementation uses a simple Solidity contract with three main functions:
- `disperseEther`: Distribute ETH to multiple recipients
- `disperseToken`: Distribute ERC-20 tokens to multiple recipients (with approval)
- `disperseTokenSimple`: Distribute ERC-20 tokens directly to multiple recipients

## Tech Stack

- Frontend: [Riot.js](https://riot.js.org/) v3.13.2
- Web3 Integration: [ethers.js](https://docs.ethers.io/) v4.0.33
- Wallet Connection: MetaMask

## Development

### Prerequisites
- Node.js
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run production
```

## License

MIT

## Credits

Original implementation by banteg, 2018

