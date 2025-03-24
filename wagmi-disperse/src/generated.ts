import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CreateX
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const createXAbi = [
  {
    type: "error",
    inputs: [{ name: "emitter", internalType: "address", type: "address" }],
    name: "FailedContractCreation",
  },
  {
    type: "error",
    inputs: [
      { name: "emitter", internalType: "address", type: "address" },
      { name: "revertData", internalType: "bytes", type: "bytes" },
    ],
    name: "FailedContractInitialisation",
  },
  {
    type: "error",
    inputs: [
      { name: "emitter", internalType: "address", type: "address" },
      { name: "revertData", internalType: "bytes", type: "bytes" },
    ],
    name: "FailedEtherTransfer",
  },
  {
    type: "error",
    inputs: [{ name: "emitter", internalType: "address", type: "address" }],
    name: "InvalidNonceValue",
  },
  {
    type: "error",
    inputs: [{ name: "emitter", internalType: "address", type: "address" }],
    name: "InvalidSalt",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newContract",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "salt", internalType: "bytes32", type: "bytes32", indexed: true },
    ],
    name: "ContractCreation",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newContract",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "ContractCreation",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newContract",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "salt", internalType: "bytes32", type: "bytes32", indexed: true },
    ],
    name: "Create3ProxyContractCreation",
  },
  {
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "initCodeHash", internalType: "bytes32", type: "bytes32" },
    ],
    name: "computeCreate2Address",
    outputs: [{ name: "computedAddress", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "initCodeHash", internalType: "bytes32", type: "bytes32" },
      { name: "deployer", internalType: "address", type: "address" },
    ],
    name: "computeCreate2Address",
    outputs: [{ name: "computedAddress", internalType: "address", type: "address" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "deployer", internalType: "address", type: "address" },
    ],
    name: "computeCreate3Address",
    outputs: [{ name: "computedAddress", internalType: "address", type: "address" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "salt", internalType: "bytes32", type: "bytes32" }],
    name: "computeCreate3Address",
    outputs: [{ name: "computedAddress", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "nonce", internalType: "uint256", type: "uint256" }],
    name: "computeCreateAddress",
    outputs: [{ name: "computedAddress", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "deployer", internalType: "address", type: "address" },
      { name: "nonce", internalType: "uint256", type: "uint256" },
    ],
    name: "computeCreateAddress",
    outputs: [{ name: "computedAddress", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "initCode", internalType: "bytes", type: "bytes" }],
    name: "deployCreate",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "initCode", internalType: "bytes", type: "bytes" },
    ],
    name: "deployCreate2",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "initCode", internalType: "bytes", type: "bytes" }],
    name: "deployCreate2",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "initCode", internalType: "bytes", type: "bytes" },
      { name: "data", internalType: "bytes", type: "bytes" },
      {
        name: "values",
        internalType: "struct CreateX.Values",
        type: "tuple",
        components: [
          {
            name: "constructorAmount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "initCallAmount", internalType: "uint256", type: "uint256" },
        ],
      },
      { name: "refundAddress", internalType: "address", type: "address" },
    ],
    name: "deployCreate2AndInit",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "initCode", internalType: "bytes", type: "bytes" },
      { name: "data", internalType: "bytes", type: "bytes" },
      {
        name: "values",
        internalType: "struct CreateX.Values",
        type: "tuple",
        components: [
          {
            name: "constructorAmount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "initCallAmount", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "deployCreate2AndInit",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "initCode", internalType: "bytes", type: "bytes" },
      { name: "data", internalType: "bytes", type: "bytes" },
      {
        name: "values",
        internalType: "struct CreateX.Values",
        type: "tuple",
        components: [
          {
            name: "constructorAmount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "initCallAmount", internalType: "uint256", type: "uint256" },
        ],
      },
      { name: "refundAddress", internalType: "address", type: "address" },
    ],
    name: "deployCreate2AndInit",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "initCode", internalType: "bytes", type: "bytes" },
      { name: "data", internalType: "bytes", type: "bytes" },
      {
        name: "values",
        internalType: "struct CreateX.Values",
        type: "tuple",
        components: [
          {
            name: "constructorAmount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "initCallAmount", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "deployCreate2AndInit",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "implementation", internalType: "address", type: "address" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "deployCreate2Clone",
    outputs: [{ name: "proxy", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "implementation", internalType: "address", type: "address" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "deployCreate2Clone",
    outputs: [{ name: "proxy", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "initCode", internalType: "bytes", type: "bytes" }],
    name: "deployCreate3",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "initCode", internalType: "bytes", type: "bytes" },
    ],
    name: "deployCreate3",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "initCode", internalType: "bytes", type: "bytes" },
      { name: "data", internalType: "bytes", type: "bytes" },
      {
        name: "values",
        internalType: "struct CreateX.Values",
        type: "tuple",
        components: [
          {
            name: "constructorAmount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "initCallAmount", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "deployCreate3AndInit",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "initCode", internalType: "bytes", type: "bytes" },
      { name: "data", internalType: "bytes", type: "bytes" },
      {
        name: "values",
        internalType: "struct CreateX.Values",
        type: "tuple",
        components: [
          {
            name: "constructorAmount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "initCallAmount", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "deployCreate3AndInit",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "initCode", internalType: "bytes", type: "bytes" },
      { name: "data", internalType: "bytes", type: "bytes" },
      {
        name: "values",
        internalType: "struct CreateX.Values",
        type: "tuple",
        components: [
          {
            name: "constructorAmount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "initCallAmount", internalType: "uint256", type: "uint256" },
        ],
      },
      { name: "refundAddress", internalType: "address", type: "address" },
    ],
    name: "deployCreate3AndInit",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "initCode", internalType: "bytes", type: "bytes" },
      { name: "data", internalType: "bytes", type: "bytes" },
      {
        name: "values",
        internalType: "struct CreateX.Values",
        type: "tuple",
        components: [
          {
            name: "constructorAmount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "initCallAmount", internalType: "uint256", type: "uint256" },
        ],
      },
      { name: "refundAddress", internalType: "address", type: "address" },
    ],
    name: "deployCreate3AndInit",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "initCode", internalType: "bytes", type: "bytes" },
      { name: "data", internalType: "bytes", type: "bytes" },
      {
        name: "values",
        internalType: "struct CreateX.Values",
        type: "tuple",
        components: [
          {
            name: "constructorAmount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "initCallAmount", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "deployCreateAndInit",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "initCode", internalType: "bytes", type: "bytes" },
      { name: "data", internalType: "bytes", type: "bytes" },
      {
        name: "values",
        internalType: "struct CreateX.Values",
        type: "tuple",
        components: [
          {
            name: "constructorAmount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "initCallAmount", internalType: "uint256", type: "uint256" },
        ],
      },
      { name: "refundAddress", internalType: "address", type: "address" },
    ],
    name: "deployCreateAndInit",
    outputs: [{ name: "newContract", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "implementation", internalType: "address", type: "address" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "deployCreateClone",
    outputs: [{ name: "proxy", internalType: "address", type: "address" }],
    stateMutability: "payable",
  },
] as const;

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const createXAddress = {
  1: "0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed",
} as const;

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const createXConfig = {
  address: createXAddress,
  abi: createXAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Disperse
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD152f549545093347A162Dce210e7293f1452150)
 */
export const disperseAbi = [
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "token", type: "address" },
      { name: "recipients", type: "address[]" },
      { name: "values", type: "uint256[]" },
    ],
    name: "disperseTokenSimple",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "token", type: "address" },
      { name: "recipients", type: "address[]" },
      { name: "values", type: "uint256[]" },
    ],
    name: "disperseToken",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [
      { name: "recipients", type: "address[]" },
      { name: "values", type: "uint256[]" },
    ],
    name: "disperseEther",
    outputs: [],
    stateMutability: "payable",
  },
] as const;

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD152f549545093347A162Dce210e7293f1452150)
 */
export const disperseAddress = {
  1: "0xD152f549545093347A162Dce210e7293f1452150", // mainnet
  3: "0xD152f549545093347A162Dce210e7293f1452150", // ropsten
  4: "0xD152f549545093347A162Dce210e7293f1452150", // rinkeby
  5: "0xD152f549545093347A162Dce210e7293f1452150", // goerli
  42: "0xD152f549545093347A162Dce210e7293f1452150", // kovan
  56: "0xD152f549545093347A162Dce210e7293f1452150", // bsc mainnet
  77: "0xD152f549545093347A162Dce210e7293f1452150", // poa sokol
  99: "0xD152f549545093347A162Dce210e7293f1452150", // poa network
  100: "0xD152f549545093347A162Dce210e7293f1452150", // xdai chain
  137: "0xD152f549545093347A162Dce210e7293f1452150", // matic
  163: "0xD152f549545093347A162Dce210e7293f1452150", // lightstreams
  250: "0xD152f549545093347A162Dce210e7293f1452150", // fantom
  42161: "0xD152f549545093347A162Dce210e7293f1452150", // arbitrum one
  4689: "0xe3122e446Bf31036DA212375803f24b3dE96D0c9", // iotex
  1284: "0xD152f549545093347A162Dce210e7293f1452150", // moonbeam
  1285: "0xD152f549545093347A162Dce210e7293f1452150", // moonriver
  42220: "0xD152f549545093347A162Dce210e7293f1452150", // celo
  1666600000: "0xD152f549545093347A162Dce210e7293f1452150", // harmony
  60: "0xD152f549545093347A162Dce210e7293f1452150", // gochain
  128: "0xD152f549545093347A162Dce210e7293f1452150", // huobi
  66: "0xD152f549545093347A162Dce210e7293f1452150", // okex
  10: "0xD152f549545093347A162Dce210e7293f1452150", // optimism
  84531: "0xD152f549545093347A162Dce210e7293f1452150", // base goerli
  1101: "0xD152f549545093347A162Dce210e7293f1452150", // polygon zkevm
  8453: "0xD152f549545093347A162Dce210e7293f1452150", // base mainnet
  11155111: "0xD152f549545093347A162Dce210e7293f1452150", // sepolia
  314: "0xD152f549545093347A162Dce210e7293f1452150", // filecoin
} as const;

/**
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD152f549545093347A162Dce210e7293f1452150)
 */
export const disperseConfig = {
  address: disperseAddress,
  abi: disperseAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link createXAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useReadCreateX = /*#__PURE__*/ createUseReadContract({
  abi: createXAbi,
  address: createXAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"computeCreate2Address"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useReadCreateXComputeCreate2Address = /*#__PURE__*/ createUseReadContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "computeCreate2Address",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"computeCreate3Address"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useReadCreateXComputeCreate3Address = /*#__PURE__*/ createUseReadContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "computeCreate3Address",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"computeCreateAddress"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useReadCreateXComputeCreateAddress = /*#__PURE__*/ createUseReadContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "computeCreateAddress",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link createXAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWriteCreateX = /*#__PURE__*/ createUseWriteContract({
  abi: createXAbi,
  address: createXAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWriteCreateXDeployCreate = /*#__PURE__*/ createUseWriteContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate2"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWriteCreateXDeployCreate2 = /*#__PURE__*/ createUseWriteContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate2",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate2AndInit"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWriteCreateXDeployCreate2AndInit = /*#__PURE__*/ createUseWriteContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate2AndInit",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate2Clone"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWriteCreateXDeployCreate2Clone = /*#__PURE__*/ createUseWriteContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate2Clone",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate3"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWriteCreateXDeployCreate3 = /*#__PURE__*/ createUseWriteContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate3",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate3AndInit"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWriteCreateXDeployCreate3AndInit = /*#__PURE__*/ createUseWriteContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate3AndInit",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreateAndInit"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWriteCreateXDeployCreateAndInit = /*#__PURE__*/ createUseWriteContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreateAndInit",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreateClone"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWriteCreateXDeployCreateClone = /*#__PURE__*/ createUseWriteContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreateClone",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link createXAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useSimulateCreateX = /*#__PURE__*/ createUseSimulateContract({
  abi: createXAbi,
  address: createXAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useSimulateCreateXDeployCreate = /*#__PURE__*/ createUseSimulateContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate2"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useSimulateCreateXDeployCreate2 = /*#__PURE__*/ createUseSimulateContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate2",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate2AndInit"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useSimulateCreateXDeployCreate2AndInit = /*#__PURE__*/ createUseSimulateContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate2AndInit",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate2Clone"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useSimulateCreateXDeployCreate2Clone = /*#__PURE__*/ createUseSimulateContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate2Clone",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate3"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useSimulateCreateXDeployCreate3 = /*#__PURE__*/ createUseSimulateContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate3",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreate3AndInit"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useSimulateCreateXDeployCreate3AndInit = /*#__PURE__*/ createUseSimulateContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreate3AndInit",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreateAndInit"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useSimulateCreateXDeployCreateAndInit = /*#__PURE__*/ createUseSimulateContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreateAndInit",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link createXAbi}__ and `functionName` set to `"deployCreateClone"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useSimulateCreateXDeployCreateClone = /*#__PURE__*/ createUseSimulateContract({
  abi: createXAbi,
  address: createXAddress,
  functionName: "deployCreateClone",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link createXAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWatchCreateXEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: createXAbi,
  address: createXAddress,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link createXAbi}__ and `eventName` set to `"ContractCreation"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWatchCreateXContractCreationEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: createXAbi,
  address: createXAddress,
  eventName: "ContractCreation",
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link createXAbi}__ and `eventName` set to `"Create3ProxyContractCreation"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed)
 */
export const useWatchCreateXCreate3ProxyContractCreationEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: createXAbi,
  address: createXAddress,
  eventName: "Create3ProxyContractCreation",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link disperseAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD152f549545093347A162Dce210e7293f1452150)
 */
export const useWriteDisperse = /*#__PURE__*/ createUseWriteContract({
  abi: disperseAbi,
  address: disperseAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link disperseAbi}__ and `functionName` set to `"disperseTokenSimple"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD152f549545093347A162Dce210e7293f1452150)
 */
export const useWriteDisperseDisperseTokenSimple = /*#__PURE__*/ createUseWriteContract({
  abi: disperseAbi,
  address: disperseAddress,
  functionName: "disperseTokenSimple",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link disperseAbi}__ and `functionName` set to `"disperseToken"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD152f549545093347A162Dce210e7293f1452150)
 */
export const useWriteDisperseDisperseToken = /*#__PURE__*/ createUseWriteContract({
  abi: disperseAbi,
  address: disperseAddress,
  functionName: "disperseToken",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link disperseAbi}__ and `functionName` set to `"disperseEther"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD152f549545093347A162Dce210e7293f1452150)
 */
export const useWriteDisperseDisperseEther = /*#__PURE__*/ createUseWriteContract({
  abi: disperseAbi,
  address: disperseAddress,
  functionName: "disperseEther",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link disperseAbi}__
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD152f549545093347A162Dce210e7293f1452150)
 */
export const useSimulateDisperse = /*#__PURE__*/ createUseSimulateContract({
  abi: disperseAbi,
  address: disperseAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link disperseAbi}__ and `functionName` set to `"disperseTokenSimple"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD152f549545093347A162Dce210e7293f1452150)
 */
export const useSimulateDisperseDisperseTokenSimple = /*#__PURE__*/ createUseSimulateContract({
  abi: disperseAbi,
  address: disperseAddress,
  functionName: "disperseTokenSimple",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link disperseAbi}__ and `functionName` set to `"disperseToken"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD152f549545093347A162Dce210e7293f1452150)
 */
export const useSimulateDisperseDisperseToken = /*#__PURE__*/ createUseSimulateContract({
  abi: disperseAbi,
  address: disperseAddress,
  functionName: "disperseToken",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link disperseAbi}__ and `functionName` set to `"disperseEther"`
 *
 * [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xD152f549545093347A162Dce210e7293f1452150)
 */
export const useSimulateDisperseDisperseEther = /*#__PURE__*/ createUseSimulateContract({
  abi: disperseAbi,
  address: disperseAddress,
  functionName: "disperseEther",
});
