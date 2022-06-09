USE nodedb;

CREATE TABLE `People` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

INSERT INTO nodedb.People (name) VALUES('Jung Norr');
INSERT INTO nodedb.People (name) VALUES('Murray Tufte');
INSERT INTO nodedb.People (name) VALUES('Suzann Giorgianni');
INSERT INTO nodedb.People (name) VALUES('Adam Vollrath');
INSERT INTO nodedb.People (name) VALUES('Patria Lepisto');