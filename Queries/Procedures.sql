create procedure postReview(@id varchar(5),@stars int,@comments varchar(200))
as 
set @id =  Cast(@id as int)
set @stars = Cast(@stars as int)
Declare @reviewNo int;
Select @reviewNo = Max(ReviewNo)+1 from Review;
Insert into Review
values(@reviewNo,@stars,@comments,@id)
Go

drop procedure postReview


