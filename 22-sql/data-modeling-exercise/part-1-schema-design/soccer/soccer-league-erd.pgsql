-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Teams" (
    "id" SERIAL   NOT NULL,
    "name" TEXT   NOT NULL,
    "city" TEXT   NOT NULL,
    CONSTRAINT "pk_Teams" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Players" (
    "id" SERIAL   NOT NULL,
    "name" TEXT   NOT NULL,
    "birthday" DATE   NOT NULL,
    "height" TEXT   NOT NULL,
    "current_team_id" INTEGER   NOT NULL,
    CONSTRAINT "pk_Players" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Referees" (
    "id" SERIAL   NOT NULL,
    "name" TEXT   NOT NULL,
    CONSTRAINT "pk_Referees" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Matches" (
    "id" SERIAL   NOT NULL,
    "home_team_id" INTEGER   NOT NULL,
    "away_team_id" INTEGER   NOT NULL,
    "location" TEXT   NOT NULL,
    "date" DATE   NOT NULL,
    "start_time" TEXT   NOT NULL,
    "season_id" INTEGER   NOT NULL,
    "head_referee_id" INTEGER   NOT NULL,
    "assistent_referee_1_id" INTEGER   NOT NULL,
    "assistent_referee_2_id" INTEGER   NOT NULL,
    CONSTRAINT "pk_Matches" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Goals" (
    "id" SERIAL   NOT NULL,
    "player_id" INTEGER   NOT NULL,
    "match_id" INTEGER   NOT NULL,
    CONSTRAINT "pk_Goals" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Lineups" (
    "id" SERIAL   NOT NULL,
    "player_id" INTEGER   NOT NULL,
    "match_id" INTEGER   NOT NULL,
    "team_id" INTEGER   NOT NULL,
    CONSTRAINT "pk_Lineups" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Season" (
    "id" SERIAL   NOT NULL,
    "start_date" DATE   NOT NULL,
    "end_date" DATE   NOT NULL,
    CONSTRAINT "pk_Season" PRIMARY KEY (
        "id"
     )
);

ALTER TABLE "Players" ADD CONSTRAINT "fk_Players_current_team_id" FOREIGN KEY("current_team_id")
REFERENCES "Teams" ("id");

ALTER TABLE "Matches" ADD CONSTRAINT "fk_Matches_home_team_id" FOREIGN KEY("home_team_id")
REFERENCES "Teams" ("id");

ALTER TABLE "Matches" ADD CONSTRAINT "fk_Matches_away_team_id" FOREIGN KEY("away_team_id")
REFERENCES "Teams" ("id");

ALTER TABLE "Matches" ADD CONSTRAINT "fk_Matches_head_referee_id" FOREIGN KEY("head_referee_id")
REFERENCES "Referees" ("id");

ALTER TABLE "Matches" ADD CONSTRAINT "fk_Matches_assistent_referee_1_id" FOREIGN KEY("assistent_referee_1_id")
REFERENCES "Referees" ("id");

ALTER TABLE "Matches" ADD CONSTRAINT "fk_Matches_assistent_referee_2_id" FOREIGN KEY("assistent_referee_2_id")
REFERENCES "Referees" ("id");

ALTER TABLE "Goals" ADD CONSTRAINT "fk_Goals_player_id" FOREIGN KEY("player_id")
REFERENCES "Players" ("id");

ALTER TABLE "Goals" ADD CONSTRAINT "fk_Goals_match_id" FOREIGN KEY("match_id")
REFERENCES "Matches" ("id");

ALTER TABLE "Lineups" ADD CONSTRAINT "fk_Lineups_player_id" FOREIGN KEY("player_id")
REFERENCES "Players" ("id");

ALTER TABLE "Lineups" ADD CONSTRAINT "fk_Lineups_match_id" FOREIGN KEY("match_id")
REFERENCES "Matches" ("id");

ALTER TABLE "Lineups" ADD CONSTRAINT "fk_Lineups_team_id" FOREIGN KEY("team_id")
REFERENCES "Teams" ("id");

ALTER TABLE "Season" ADD CONSTRAINT "fk_Season_id" FOREIGN KEY("id")
REFERENCES "Matches" ("season_id");

