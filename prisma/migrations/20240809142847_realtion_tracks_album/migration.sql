-- CreateTable
CREATE TABLE "Tracks" (
    "id" SERIAL NOT NULL,
    "name" CHAR(255) NOT NULL,
    "trackNo" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "mp3" TEXT NOT NULL,
    "albumId" INTEGER NOT NULL,

    CONSTRAINT "Tracks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tracks" ADD CONSTRAINT "Tracks_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
