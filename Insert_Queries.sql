Select * from Users

Insert into Users
values(001,'abc123','Abdullah'),
(002,'abc123','Mishal'),
(003,'abc123','Ammar'),
(004,'abc123','Shazray')

Insert into Admin
values(001),(002),(003),(004)

Insert into Room
values (1,Default,Default,Default),(2,Default,Default,Default),(3,Default,Default,Default),(4,Default,Default,Default)
,(5,Default,Default,Default),(6,Default,Default,Default),(7,Default,Default,Default),(8,Default,Default,Default)
,(9,Default,Default,Default),(10,Default,Default,Default),(11,Default,Default,Default),(12,Default,Default,Default),
(13,Default,Default,Default),(14,Default,Default,Default),(15,Default,Default,Default),(16,Default,Default,Default),
(17,Default,Default,Default)

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


Insert into Service(ServiceNo,ServiceName)
values (1,'Tennis'),(2,'Bowling'),(3,'Movies')



Insert into Users
values(05,'password','Abdullah05')

Insert into Client
values(05,'Abdullah','Gohar','03354133376','Male','abdsfnsd@gmail.com')

Insert into Booking
values(05,17,'10-Nov-2020','17-Nov-2020')

Insert into Orders
values(05,1),(05,2)

Insert into FoodReservation
values(05,Default,2)

Insert into Review
values(01,5,'Good Resort',05)

Insert into Bill
values(01,'17-Nov-2020',799.99,05)



Select * from Tennis
Select * from Bowling
Select * from Movies


Select * from Tennis

alter table Room
drop column ClientID

drop table Penthouse,Suite,Luxury,Economy
drop table Room


drop table Food,Tennis,Bowling,Movies

alter table Users
add constraint unique_username Unique(UserName)


Select * from Users

Select * from Client

Select * from Booking

Select * from Room

Select * from Orders

Select * from Bill

Select * from Review

Select * from FoodReservation