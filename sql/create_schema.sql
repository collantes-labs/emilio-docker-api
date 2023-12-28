-- public.product definition

-- Drop table

-- DROP TABLE public.product;

CREATE TABLE public.products (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	"price" int4 NOT NULL,
	"description" varchar NOT NULL,
	CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id)
);

CREATE ROLE emiliouser WITH LOGIN SUPERUSER CREATEDB CREATEROLE INHERIT NOREPLICATION CONNECTION LIMIT -1 PASSWORD '12345678'