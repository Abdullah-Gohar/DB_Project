create procedure postReview(@id varchar(5),@stars int,@comments varchar(200))
as 
set @id =  Cast(@id as int)
set @stars = Cast(@stars as int)
Declare @reviewNo int;
Select @reviewNo = Max(ReviewNo)+1 from Review;
Insert into Review
values(@reviewNo,@stars,@comments,@id)

Go

Create trigger removeClient
on review
after insert 
As
Declare @id int
Select @id = ClientID from Inserted

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


