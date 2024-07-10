/* To see the databases*/
show databases; 
create database Movies_Database; /* To create database*/
show databases;
use Movies_Database; /* To use the database*/
USE Movies_Database;
DROP DATABASE Movies_Database; /* TO delete the database*/
show databases;

create database Movies_Databases;
USE Movies_Databases;
CREATE TABLE Movies (Name VARCHAR(100), Rating INTEGER);
SHOW TABLES;
INSERT INTO Movies (Name, Rating) VALUE ("AVENGERS INFINITY WAR ",5);
INSERT INTO Movies (Name, Rating) VALUE ("AVENGERS END GAME ",5);
SHOW TABLES;
SELECT * FROM MOVIES;
SELECT * FROM Movies;

SELECT NAME, RATING FROM Movies;