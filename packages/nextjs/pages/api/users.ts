import { CrudRouteHandler } from "./handler";
import { ICrudService } from "./types";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~~/server/db";

const UserService: ICrudService<User> = {
  getAll: () => prisma.user.findMany(),
  getOne: id => prisma.user.findUnique({ where: { id } }),
  create: data => prisma.user.create({ data }),
  update: (id, data) => prisma.user.update({ where: { id }, data }),
  delete: id => prisma.user.delete({ where: { id } }),
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await CrudRouteHandler(req, res, UserService);
}
