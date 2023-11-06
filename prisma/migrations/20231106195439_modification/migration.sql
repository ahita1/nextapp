/*
  Warnings:

  - You are about to alter the column `price` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Products` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `price` DOUBLE NOT NULL;
