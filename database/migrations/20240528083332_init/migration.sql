/*
  Warnings:

  - You are about to drop the `_ProfileToVoteOption` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProfileToVoteOption" DROP CONSTRAINT "_ProfileToVoteOption_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProfileToVoteOption" DROP CONSTRAINT "_ProfileToVoteOption_B_fkey";

-- DropTable
DROP TABLE "_ProfileToVoteOption";

-- CreateTable
CREATE TABLE "ProfileVoteOption" (
    "profileId" UUID NOT NULL,
    "voteOptionId" UUID NOT NULL,

    CONSTRAINT "ProfileVoteOption_pkey" PRIMARY KEY ("profileId","voteOptionId")
);

-- CreateIndex
CREATE INDEX "ProfileVoteOption_voteOptionId_idx" ON "ProfileVoteOption"("voteOptionId");

-- AddForeignKey
ALTER TABLE "ProfileVoteOption" ADD CONSTRAINT "ProfileVoteOption_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileVoteOption" ADD CONSTRAINT "ProfileVoteOption_voteOptionId_fkey" FOREIGN KEY ("voteOptionId") REFERENCES "VoteOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;
