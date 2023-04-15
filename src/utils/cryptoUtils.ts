export const formateAddress = (walletAddress: string) => {
  return `0x${walletAddress.slice(0, 4)} .... ${walletAddress.slice(-4)}`;
};
