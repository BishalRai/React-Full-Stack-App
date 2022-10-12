drop database if exists demo;
create database demo;
use demo;

create table detail(
    id int primary key auto_increment,
    fname varchar(255) not null,
    lname varchar(255) not null
);

insert into detail(fname,lname) values ('Jouni', 'Juntunen');
insert into detail(fname, lname) values('Teemu', 'Leppanen');