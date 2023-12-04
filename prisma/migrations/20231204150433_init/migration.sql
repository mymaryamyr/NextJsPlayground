-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "constent" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false
);
