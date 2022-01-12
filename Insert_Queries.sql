Select * from Users

Insert into Users
values(001,'abc123','Abdullah'),
(002,'abc123','Mishal'),
(003,'abc123','Ammar'),
(004,'abc123','Shazray')

Insert into Admin
values(001),(002),(003),(004)

Insert into Room(RoomNo)
values (1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16),(17)

Insert into Penthouse(RoomNo)
values (17)

Insert into Suite(RoomNo)
values(16),(15),(14),(13)

Insert into Economy(RoomNo)
values (5),(6),(7),(8),(9),(10),(11),(12)

Insert into Luxury(RoomNo)
values (1),(2),(3),(4)


Select * from Room

Select * from Penthouse
Select * from Suite
Select * from Luxury
Select * from Economy

drop table Service

Insert into Service(ServiceNo,ServiceName)
values (1,'Food'),(2,'Tennis'),(3,'Bowling'),(4,'Movies')


Insert into Tennis
values (Default,Default)

Insert into Bowling
values (Default,Default)

Insert into Movies
values (Default,Default)

drop table Food
Insert into Food
values(1,'Pizza',DEFAULT,19.99),
(2,'Burger',DEFAULT,9.99),
(3,'Taco',DEFAULT,8.99),
(4,'Spaghetti',DEFAULT,12.99),
(5,'Coffee',DEFAULT,2.99),
(6,'Cold Drink',DEFAULT,1.99),
(7,'Ice Cream',DEFAULT,4.99)

Select * from Food
Select * from Tennis
Select * from Bowling
Select * from Movies


Select * from Tennis

alter table Room
drop column ClientID

drop table Penthouse,Suite,Luxury,Economy
