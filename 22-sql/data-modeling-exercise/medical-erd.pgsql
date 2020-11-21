-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "MedicalCenter" (
    "id" SERIAL   NOT NULL,
    "name" TEXT   NOT NULL,
    "address" TEXT   NOT NULL,
    CONSTRAINT "pk_MedicalCenter" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Doctors" (
    "id" SERIAL   NOT NULL,
    "first_name" TEXT   NOT NULL,
    "last_name" TEXT   NOT NULL,
    "medical_center_id" INTEGER   NOT NULL,
    CONSTRAINT "pk_Doctors" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "DoctorsPatients" (
    "id" SERIAL   NOT NULL,
    "doctor_id" INTEGER   NOT NULL,
    "patient_id" INTEGER   NOT NULL,
    CONSTRAINT "pk_DoctorsPatients" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Patients" (
    "id" SERIAL;   NOT NULL,
    "first_name" TEXT   NOT NULL,
    "last_name" TEXT   NOT NULL,
    "birthday" DATE   NOT NULL,
    CONSTRAINT "pk_Patients" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "PatientsDiseases" (
    "id" SERIAL   NOT NULL,
    "patient_id" INTEGER   NOT NULL,
    "disease_id" INTEGER   NOT NULL,
    CONSTRAINT "pk_PatientsDiseases" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Diseases" (
    "id" SERIAL   NOT NULL,
    "name" TEXT   NOT NULL,
    "description" TEXT   NOT NULL,
    CONSTRAINT "pk_Diseases" PRIMARY KEY (
        "id"
     )
);

ALTER TABLE "Doctors" ADD CONSTRAINT "fk_Doctors_medical_center_id" FOREIGN KEY("medical_center_id")
REFERENCES "MedicalCenter" ("id");

ALTER TABLE "DoctorsPatients" ADD CONSTRAINT "fk_DoctorsPatients_doctor_id" FOREIGN KEY("doctor_id")
REFERENCES "Doctors" ("id");

ALTER TABLE "DoctorsPatients" ADD CONSTRAINT "fk_DoctorsPatients_patient_id" FOREIGN KEY("patient_id")
REFERENCES "Patients" ("id");

ALTER TABLE "PatientsDiseases" ADD CONSTRAINT "fk_PatientsDiseases_patient_id" FOREIGN KEY("patient_id")
REFERENCES "Patients" ("id");

ALTER TABLE "PatientsDiseases" ADD CONSTRAINT "fk_PatientsDiseases_disease_id" FOREIGN KEY("disease_id")
REFERENCES "Diseases" ("id");

