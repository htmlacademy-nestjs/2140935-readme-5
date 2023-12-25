/*
  Warnings:

  - You are about to drop the column `state` on the `posts` table. All the data in the column will be lost.
  - Added the required column `is_draft` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "state",
ADD COLUMN     "is_draft" BOOLEAN NOT NULL;
