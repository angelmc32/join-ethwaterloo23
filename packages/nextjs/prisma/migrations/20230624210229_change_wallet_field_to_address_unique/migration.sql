/*
  Warnings:

  - You are about to drop the column `wallet` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[address]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "wallet",
ADD COLUMN     "address" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");
