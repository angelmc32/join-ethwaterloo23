import { PublicLockV13 } from "@unlock-protocol/contracts";
import { BytesLike, ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";
import scaffoldConfig from "~~/scaffold.config";

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

const lockContractAddressGoerli =
  process.env.NEXT_PUBLIC_LOCK_CONTRACT_ADDR_GOERLI || "0x2dbb146fd33e3237c98b17540b79c4223f5ba45d";
const joinWalletPK = process.env.NEXT_PUBLIC_PR_K;

interface IUnlockService<T> {
  airdrop: (address: string) => Promise<T>;
}

const UnlockService: IUnlockService<any> = {
  airdrop: async (address: string) => {
    const provider = new ethers.providers.AlchemyProvider("goerli", scaffoldConfig.alchemyApiKey);

    const joinWallet = new ethers.Wallet(joinWalletPK as BytesLike);

    const signer = joinWallet.connect(provider);

    const lock = new ethers.Contract(lockContractAddressGoerli, PublicLockV13.abi, signer);

    try {
      const tx = await lock.grantKeys([address], [0], [joinWallet.address]);
      return await tx.wait();
    } catch (error) {
      console.log(error);
    }
  },
};

const EthersBackendHandler = async (
  request: NextApiRequest,
  response: NextApiResponse,
  service: IUnlockService<any>,
) => {
  const { address } = request.query || "0x0";

  if ((request.method as HttpMethod) === "POST") {
    const createResponse = await service.airdrop(address as string);
    return response.status(201).json(createResponse);
  }

  const airdropResponse = await service.airdrop(address as string);

  return response.status(200).json(airdropResponse);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await EthersBackendHandler(req, res, UnlockService);
}
