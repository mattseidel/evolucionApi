create database herbaLife;

use herbaLife;

create table tipoDoc(
    id int(2) auto_increment primary key,
    nombre varchar(15) not null
);

create table client(
    id int(11) auto_increment primary key,
    tipo_doc int(2),
    nombre varchar(25) not null,
    apellido varchar (25) not null,
    num_tel varchar(15) not null unique,
    fecha_inicio date,
    fec_nacimiento date,
    modification timestamp on update current_timestamp,
    foreign key (tipo_doc) references tipoDoc(id)
);

create table evolution(
    id int(11) auto_increment primary key,
    client int(11),
    peso int(3) unsigned not null,
    porcentaje_grasa float(4,2) unsigned not null,
    agua_corp float(4,2) unsigned not null,
    compl_fisic float (4,2) unsigned not null,
    metab_basal_kcal float(4,2) unsigned not null,
    edad_metabolica int(3) unsigned not null,
    masa_osea int(3) unsigned not null,
    grasa_viseral int(3) unsigned not null,
    cuello int(3) unsigned not null,
    pecho int(3) unsigned not null,
    brazo int(3) unsigned not null,
    cintura int(3) unsigned not null,
    barriga int(3) unsigned not null,
    cadera int(3) unsigned not null,
    muslo int(3) unsigned not null,
    foreign key (client) references client(id)    
);