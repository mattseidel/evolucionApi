create database herbaLife;

use herbaLife;

create table tipoDoc(
    id int(2) auto_increment primary key,
    nombre varchar(15) not null
);

CREATE TABLE `client` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `tipo_doc` int(2) DEFAULT NULL,  
    `nombre` varchar(25) NOT NULL,  
    `apellido` varchar(25) NOT NULL,  
    `num_tel` varchar(15) NOT NULL,  
    `fecha_inicio` date DEFAULT NULL,  
    `fec_nacimiento` date DEFAULT NULL, 
    `creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  
    PRIMARY KEY (`id`),  
    UNIQUE KEY `num_tel` (`num_tel`),  
    KEY `tipo_doc` (`tipo_doc`),  
    CONSTRAINT `client_ibfk_1` FOREIGN KEY (`tipo_doc`) REFERENCES `tipodoc` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
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

create table user(
    id int(11) primary key auto_increment,
    nombre varchar(25) not null,
    username varchar(25) not null unique,
    password varchar(25) not null
);