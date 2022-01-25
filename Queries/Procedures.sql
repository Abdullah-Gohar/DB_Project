create procedure postReview(@id varchar(5),@stars int,@comments varchar(200))
as 
set @id =  Cast(@id as int)
set @stars = Cast(@stars as int)
Declare @reviewNo int;
Select @reviewNo = Max(ReviewNo)+1 from Review;
Insert into Review
values(@reviewNo,@stars,@comments,@id)

Update R
Set R.roomState = 0
from Room as R
inner join Booking as B
on R.RoomNo = B.RoomNo
where B.ClientID = @id



Update Client
set ClientStatus  = 0
where ClientId = @id

Go

drop procedure postReview


Create trigger insertUser
on Client
instead of insert



Select * from Bill

Select * from Client
where ClientStatus = 1

Update Client
set ClientStatus  = 1
where ClientId = 124

Select * from Booking
where ClientID = 189

Select * from FoodReservation
where ClientID = 189

Select * from Users
where UserId = 5

Select UserName,Pass from Users inner join Client on Users.UserID = Client.ClientID
where UserName = 'Abdullah05' and Pass = 'password' and ClientStatus = 1

Update Client
set ClientStatus = 1
where ClientID = 5

Select * from Client
where ClientStatus = 1

Select * from Room
where RoomState = 1

Update Room
Set RoomState = 0

Update Client
set ClientStatus = 1
where ClientID = 2000

Select * from Users
where UserID = 2000

Select UserID as id from Users where UserName = ''

Select * from Client
where ClientStatus = 0