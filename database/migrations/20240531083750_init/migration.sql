/*
  Warnings:

  - A unique constraint covering the columns `[profileId,boardId]` on the table `DisLikes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId,boardId]` on the table `Likes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId,videoId]` on the table `VideoDislikes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId,videoId]` on the table `VideoLikes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "CommentLikes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "profileId" UUID NOT NULL,
    "commentId" UUID NOT NULL,

    CONSTRAINT "CommentLikes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentDisLikes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "profileId" UUID NOT NULL,
    "commentId" UUID NOT NULL,

    CONSTRAINT "CommentDisLikes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CommentLikes_commentId_idx" ON "CommentLikes"("commentId");

-- CreateIndex
CREATE UNIQUE INDEX "CommentLikes_profileId_commentId_key" ON "CommentLikes"("profileId", "commentId");

-- CreateIndex
CREATE INDEX "CommentDisLikes_commentId_idx" ON "CommentDisLikes"("commentId");

-- CreateIndex
CREATE UNIQUE INDEX "CommentDisLikes_profileId_commentId_key" ON "CommentDisLikes"("profileId", "commentId");

-- CreateIndex
CREATE INDEX "DisLikes_boardId_idx" ON "DisLikes"("boardId");

-- CreateIndex
CREATE UNIQUE INDEX "DisLikes_profileId_boardId_key" ON "DisLikes"("profileId", "boardId");

-- CreateIndex
CREATE INDEX "Likes_boardId_idx" ON "Likes"("boardId");

-- CreateIndex
CREATE UNIQUE INDEX "Likes_profileId_boardId_key" ON "Likes"("profileId", "boardId");

-- CreateIndex
CREATE INDEX "VideoDislikes_videoId_idx" ON "VideoDislikes"("videoId");

-- CreateIndex
CREATE UNIQUE INDEX "VideoDislikes_profileId_videoId_key" ON "VideoDislikes"("profileId", "videoId");

-- CreateIndex
CREATE INDEX "VideoLikes_videoId_idx" ON "VideoLikes"("videoId");

-- CreateIndex
CREATE UNIQUE INDEX "VideoLikes_profileId_videoId_key" ON "VideoLikes"("profileId", "videoId");

-- AddForeignKey
ALTER TABLE "CommentLikes" ADD CONSTRAINT "CommentLikes_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentLikes" ADD CONSTRAINT "CommentLikes_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentDisLikes" ADD CONSTRAINT "CommentDisLikes_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentDisLikes" ADD CONSTRAINT "CommentDisLikes_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
