-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Users" (
    "id" SERIAL   NOT NULL,
    "first_name" TEXT   NOT NULL,
    "last_name" TEXT   NOT NULL,
    "email" TEXT   NOT NULL,
    "username" VARCHAR(15)   NOT NULL,
    "encrypted_password" VARCHAR(15)   NOT NULL,
    "prefered_region_id" INTEGER   NOT NULL,
    CONSTRAINT "pk_Users" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Regions" (
    "id" INTEGER   NOT NULL,
    "name" VARCHAR(15)   NOT NULL,
    CONSTRAINT "pk_Regions" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Posts" (
    "id" SERIAL   NOT NULL,
    "title" VARCHAR(15)   NOT NULL,
    "text" TEXT   NOT NULL,
    "location" TEXT   NOT NULL,
    "price" FLOAT   NOT NULL,
    "user_id" INTEGER   NOT NULL,
    "category_id" INTEGER   NOT NULL,
    "region_id" INTEGER   NOT NULL,
    CONSTRAINT "pk_Posts" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Categories" (
    "id" SERIAL   NOT NULL,
    "name" VARCHAR(15)   NOT NULL,
    CONSTRAINT "pk_Categories" PRIMARY KEY (
        "id"
     )
);

ALTER TABLE "Users" ADD CONSTRAINT "fk_Users_prefered_region_id" FOREIGN KEY("prefered_region_id")
REFERENCES "Regions" ("id");

ALTER TABLE "Posts" ADD CONSTRAINT "fk_Posts_user_id" FOREIGN KEY("user_id")
REFERENCES "Users" ("id");

ALTER TABLE "Posts" ADD CONSTRAINT "fk_Posts_category_id" FOREIGN KEY("category_id")
REFERENCES "Categories" ("id");

ALTER TABLE "Posts" ADD CONSTRAINT "fk_Posts_region_id" FOREIGN KEY("region_id")
REFERENCES "Regions" ("id");

