# wagmi disperse

A modern web application for distributing ETH and ERC20 tokens to multiple recipients in a single transaction, built with [wagmi](https://wagmi.sh/), [viem](https://viem.sh/), and [React](https://react.dev/).

Deployed at [disperse.app](https://disperse.app/).

## Overview

Disperse is a decentralized application that simplifies the process of sending multiple token transfers in one transaction. This can save significant gas costs and time when distributing tokens to many addresses.

Key features:
- Distribute ETH/native coins to multiple addresses
- Distribute ERC20 tokens to multiple addresses
- Support for multiple networks (including mainnet, testnets, and custom networks)
- Auto-detection of deployed Disperse contracts
- Deploy your own Disperse contract if needed
- Input validation and balance tracking
- Support for CSV import of recipient addresses and amounts

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (or npm/yarn)

### Installation

1. Clone this repository
```bash
gh repo clone banteg/disperse
cd disperse/wagmi-disperse
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser

## Building for Production

```bash
pnpm build
```

This will generate a production-ready build in the `dist` directory.

## Technology Stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [wagmi](https://wagmi.sh/) - React Hooks for Ethereum
- [viem](https://viem.sh/) - TypeScript Interface for Ethereum
- [TanStack Query](https://tanstack.com/query) - Asynchronous state management

## Contract Details

The app can work with:

1. Legacy Disperse contracts deployed on various networks
2. CreateX deployed contracts
3. Custom deployed Disperse contracts

The contract provides functions to:
- `disperseEther`: Distribute native currency (ETH, etc.)
- `disperseToken`: Distribute ERC20 tokens efficiently
- `disperseTokenSimple`: Alternative method for token distribution
