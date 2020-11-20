-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "MedicalCenter" (
    "id" int   NOT NULL,
    "name" string   NOT NULL,
    "address" string   NOT NULL,
    CONSTRAINT "pk_MedicalCenter" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Doctors" (
    "id" int   NOT NULL,
    "first_name" string   NOT NULL,
    "last_name" string   NOT NULL,
    "medical_center_id" int   NOT NULL,
    CONSTRAINT "pk_Doctors" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "DoctorsPatients" (
    "id" int   NOT NULL,
    "doctor_id" int   NOT NULL,
    "patient_id" int   NOT NULL,
    CONSTRAINT "pk_DoctorsPatients" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Patients" (
    "id" int   NOT NULL,
    "first_name" string   NOT NULL,
    "last_name" string   NOT NULL,
    "birthday" string   NOT NULL,
    CONSTRAINT "pk_Patients" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "PatientsDiseases" (
    "id" int   NOT NULL,
    "patient_id" int   NOT NULL,
    "disease_id" int   NOT NULL,
    CONSTRAINT "pk_PatientsDiseases" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Diseases" (
    "id" int   NOT NULL,
    "name" string   NOT NULL,
    "description" string   NOT NULL,
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

