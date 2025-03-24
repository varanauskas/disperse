export interface TokenInfo {
  address?: `0x${string}`;
  name?: string;
  symbol?: string;
  decimals?: number;
  balance?: bigint;
  allowance?: bigint;
  // Define contract as a safe Record type instead of any
  contract?: Record<string, unknown>;
}

export interface Recipient {
  address: `0x${string}`;
  value: bigint;
}
