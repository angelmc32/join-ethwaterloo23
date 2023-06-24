import { ICrudService } from "./types";
import type { NextApiRequest, NextApiResponse } from "next";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const CrudRouteHandler = async <T>(
  request: NextApiRequest,
  response: NextApiResponse,
  service: ICrudService<T>,
) => {
  const id = request.query.id as string;

  if ((request.method as HttpMethod) === "GET") {
    if (!id) {
      const getAllResponse = await service.getAll();
      return response.status(200).json(getAllResponse);
    }

    const getSingleResponse = await service.getOne(id);

    if (getSingleResponse === null) {
      return response.status(404).send(null);
    }

    return response.status(200).json(getSingleResponse);
  }

  if ((request.method as HttpMethod) === "POST") {
    const data = request.body as T;
    const createResponse = await service.create(data);
    return response.status(201).json(createResponse);
  }

  if ((request.method as HttpMethod) === "PUT") {
    const data = request.body as T;
    const updateResponse = await service.update(id, data);
    return response.status(200).json(updateResponse);
  }

  if ((request.method as HttpMethod) === "DELETE") {
    const deleteResponse = await service.delete(id);
    return response.status(200).json(deleteResponse);
  }

  return response.status(405).send("Method not allowed");
};
