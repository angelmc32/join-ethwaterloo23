import type { NextApiRequest, NextApiResponse } from "next";

interface IUnlockService {
  airdrop: (address: string, id: string) => string;
}

const UnlockService: IUnlockService = {
  airdrop: (address, string) => {
    console.log(address, string);
    return "abcd";
  },
};

const EthersBackendHandler = async (request: NextApiRequest, response: NextApiResponse, service: IUnlockService) => {
  const { address, id } = request.query;

  const airdropResponse = await service.airdrop(address as string, id as string);

  return response.status(200).json(airdropResponse);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await EthersBackendHandler(req, res, UnlockService);
}
