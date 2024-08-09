-- CreateTable
CREATE TABLE "Artists" (
    "id" SERIAL NOT NULL,
    "name" CHAR(255) NOT NULL,
    "bio" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Artists_pkey" PRIMARY KEY ("id")
);
