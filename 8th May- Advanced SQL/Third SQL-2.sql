show databases;
use lco_films;

show tables;
desc actor; /* Auto incremented means that if any row will be added actor id will increase by 1.*/

select * from actor limit 10;

select * from actor;

insert into actor (first_name,last_name,address_id,last_update) value ("Pappu","Singh",777,'2020-07-30 12:37:51');

select * from actor;
select * from address;

select * from actor where actor_id>=150;

select * from address limit 10;

select * from actor limit 10;

SELECT first_name,last_name,address from Actor JOIN address ON Actor.address_id=Address.address_id;

SELECT first_name,last_name,address,district from Actor JOIN address ON Actor.address_id=Address.address_id limit 10;

show tables;

select * from city limit 10;

SELECT first_name,last_name,address,district from Actor JOIN address ON Actor.address_id=Address.address_id JOIN city ON Address.city_id=city.city_id;

SELECT first_name,last_name,address,district from Actor JOIN address ON Actor.address_id=Address.address_id JOIN city ON Address.city_id=city.city_id limit 10;
/*These types of joins are known as INNER JOIN*/

INSERT INTO actor (first_name,last_name,address_id,last_update) values ("Shourya","Shri",8989,'2020-07-30 12:37:51');

INSERT INTO address (address, district,city_id,postal_code,phone,last_update) VALUES ("A-16, Rohini","Texas",295,18743,86045262643,'2020-07-30 12:37:51');

select * from address;

SELECT first_name,last_name,address,district from Actor JOIN address ON Actor.address_id=Address.address_id; /*Here, there won't be any record of A-16 rohini as it is not common in both*/

/**Below is right outer join*/

SELECT first_name,last_name,address,district from Actor RIGHT OUTER JOIN address ON Actor.address_id=Address.address_id;

/**Below is LEFT outer join*/

SELECT first_name,last_name,address,district from Actor LEFT OUTER JOIN address ON Actor.address_id=Address.address_id;

SELECT first_name,last_name from Actor;

select first_name AS first, last_name AS last from actor;/*Alias concept*/

SELECT COUNT(*) from address where district="Texas";

select distinct district from address;

select count(*),district from address group by district;

select count(*) as count ,district from address group by district having count>=5; /*When you have to apply filter for group, you have to use having*/

















































































































