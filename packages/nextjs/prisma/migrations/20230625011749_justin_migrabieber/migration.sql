-- AlterTable
ALTER TABLE "User" ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "profilePhoto" DROP NOT NULL,
ALTER COLUMN "pronoun" DROP NOT NULL,
ALTER COLUMN "language" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "blockchainLvl" DROP NOT NULL,
ALTER COLUMN "yearsOfExperience" DROP NOT NULL;
