CREATE DATABASE MOVIES_DB_PW;
SHOW DATABASES;

USE MOVIES_DB_PW;
CREATE TABLE ACTORS (Firstname VARCHAR(20), Lastname VARCHAR(20), Gender VARCHAR(10), Networth INTEGER);
INSERT INTO Actors (FirStname, Lastname, Gender, Networth) VALUES ("CHRIS", "HEMSWORTH", "MALE", 400);
SHOW TABLES;
INSERT INTO Actors (FirStname, Lastname, Gender, Networth) VALUES ("JOHNY", "DEEO", "MALE", 500);
INSERT INTO Actors (FirStname, Lastname, Gender, Networth) VALUES ("SCARLET", "JOHNSON", "FEMALE", 300), ("CHRIS","EVANS","MALE",700),("PAUL","RUDD","MALE",200),("BRIE","LARSON","FEMALE",600);
SELECT * FROM ACTORS;

SELECT * FROM ACTORS WHERE Networth >=500;
SELECT * FROM ACTORS WHERE Networth >=500 OR Networth<=200;

select * from actors where gender="female";
select firstname,networth from actors where gender="female";

select * from actors;
INSERT INTO Actors (FirStname, Lastname, Gender, Networth) VALUES ("CHADWICK", "BOSEMAN", "MALE", 400);
SELECT * FROM ACTORS WHERE FIRSTNAME="CHRIS";

SELECT * FROM ACTORS WHERE FIRSTNAME LIKE "CH%";
SELECT * FROM ACTORS WHERE FIRSTNAME like "%IS";
SELECT * FROM ACTORS WHERE FIRSTNAME LIKE "%a%";

select * from actors order by networth asc;
select * from actors order by networth desc;

SELECT * FROM ACTORS WHERE FIRSTNAME LIKE "CH%" ORDER BY NETWORTH DESC;

SELECT * FROM ACTORS WHERE FIRSTNAME LIKE "CH%" ORDER BY NETWORTH DESC; /*wE HAVE TO WRITE ORDER BY AFTER APPLYING THE FILTER, ELSE IT WILL GIVE ERROR*/
/*BY DEFAULT IT IS IN ASCENDING ORDER*/

SELECT * FROM ACTORS WHERE FIRSTNAME LIKE "CH%" ORDER BY FIRSTNAME;/* BY DEFAULT ASCENDING*/

SELECT * FROM ACTORS WHERE FIRSTNAME LIKE "CH%" ORDER BY FIRSTNAME, NETWORTH DESC;/*IF FIRST NAME IS SAME THEN IT WILL SORT ON THE BASIS OF NETWORTH*/

SELECT * FROM ACTORS;

SELECT * FROM ACTORS LIMIT 3; /*FIRST 3 ROW*/

SELECT * FROM ACTORS LIMIT 3 OFFSET 0;/*Ofset means from where to start with*/

SELECT * FROM ACTORS LIMIT 3 OFFSET 2;/*Ofset means from where to start with*/

SELECT * FROM ACTORS LIMIT 3 OFFSET 4;/*Ofset means from where to start with*/

SELECT * FROM ACTORS LIMIT 3 OFFSET 6;/*Ofset means from where to start with*/

SELECT * FROM ACTORS LIMIT 3 OFFSET 5;/*Ofset means from where to start with*/

/*This is used in amazon,flipkart. Like in each page only 10,20,30 data will be shown and for further you need to go to another page.*/

select * from actors where firstname like "ch%" limit 2;

select * from actors where firstname like "ch%" order by firstname asc limit 2;

update actors set networth=550 where firstname="chadwick";

select * from actors;

















