/*
  Warnings:

  - You are about to drop the column `url` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `video` on the `posts` table. All the data in the column will be lost.
  - Added the required column `link_url` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo_url` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `video_url` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "url",
DROP COLUMN "video",
ADD COLUMN     "link_url" TEXT NOT NULL,
ADD COLUMN     "photo_url" TEXT NOT NULL,
ADD COLUMN     "video_url" TEXT NOT NULL;
