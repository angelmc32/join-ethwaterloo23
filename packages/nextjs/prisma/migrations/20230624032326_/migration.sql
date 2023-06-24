-- CreateEnum
CREATE TYPE "Pronoun" AS ENUM ('He', 'She');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('English', 'Spanish', 'French');

-- CreateEnum
CREATE TYPE "Country" AS ENUM ('Canada', 'USA', 'Mexico');

-- CreateEnum
CREATE TYPE "Skill" AS ENUM ('Fullstack', 'Backend', 'Frontend', 'UXUI', 'Designer', 'ProductManager');

-- CreateEnum
CREATE TYPE "Web3Level" AS ENUM ('Begginer', 'Intermediate', 'Advanced', 'Vitalik');

-- CreateEnum
CREATE TYPE "ProggrammingLang" AS ENUM ('JavaScript', 'TypeScript', 'Java', 'CSharp', 'Cpp', 'C', 'Python', 'Rust', 'Go', 'Solidity');

-- CreateEnum
CREATE TYPE "Tool" AS ENUM ('Illustrator', 'Photoshop', 'Notion', 'Canva', 'Figma');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "profilePhoto" TEXT NOT NULL,
    "pronoun" "Pronoun" NOT NULL,
    "language" "Language" NOT NULL,
    "country" "Country" NOT NULL,
    "twitter" TEXT,
    "github" TEXT,
    "telegram" TEXT,
    "linkedin" TEXT,
    "lens" TEXT,
    "ens" TEXT,
    "wallet" TEXT,
    "portfolio" TEXT,
    "skill" "Skill"[],
    "blockchainLvl" "Web3Level" NOT NULL,
    "proggrammingLangs" "ProggrammingLang"[],
    "tools" "Tool"[],
    "yearsOfExperience" INTEGER NOT NULL,
    "poaps" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
