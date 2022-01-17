update review set ReviewComments = 'Excellent management' where ReviewNo=100 --1
update review set ReviewComments = 'Loved the stay!' where ReviewNo=101
update review set ReviewComments = '10/10 for the quality services.' where ReviewNo=102


select ReviewNo, reviewrating, ReviewComments
from review
where ReviewNo=102