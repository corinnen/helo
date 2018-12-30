create table username (id int,		
username varchar(24),			
password varchar(24),			
profile_pic	text)

create table posts (id int, 
title varchar, 
img text, 
content text, 
author_id references username)