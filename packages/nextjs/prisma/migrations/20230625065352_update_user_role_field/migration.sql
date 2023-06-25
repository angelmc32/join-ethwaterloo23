-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Project', 'Designer', 'Developer');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role";
