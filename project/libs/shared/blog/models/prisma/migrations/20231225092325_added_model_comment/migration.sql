/*
  Warnings:

  - Added the required column `commentsCount` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_repost` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likesCount` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `original_author` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `original_id` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "commentsCount" INTEGER NOT NULL,
ADD COLUMN     "is_repost" BOOLEAN NOT NULL,
ADD COLUMN     "likesCount" INTEGER NOT NULL,
ADD COLUMN     "original_author" TEXT NOT NULL,
ADD COLUMN     "original_id" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "comments_post_id_idx" ON "comments"("post_id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
