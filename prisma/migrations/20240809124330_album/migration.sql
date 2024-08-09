-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "name" CHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "smallCover" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "popularity" INTEGER NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);
