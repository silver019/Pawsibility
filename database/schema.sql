
DROP DATABASE IF EXISTS database_development;

CREATE DATABASE database_development;


USE database_development;
CREATE TABLE dogs(
 
 id INT NOT NULL AUTO_INCREMENT,
 breed VARCHAR(100),
 img VARCHAR (255),
 score INT,
 name VARCHAR(100),
 zipcode VARCHAR (100),
 email VARCHAR (100),
 createdAt VARCHAT (100),
 PRIMARY KEY (id)
 

);

INSERT INTO dogs (breed,img,score) VALUES ('pug', 'https://az616578.vo.msecnd.net/files/2016/06/17/636017344804814168-1934845513_PUG.jpg', '5');
INSERT INTO dogs (breed,img,score) VALUES ('beagel', 'https://az616578.vo.msecnd.net/files/2016/06/17/636017344804814168-1934845513_PUG.jpg', '4' );
INSERT INTO dogs (breed,img,score) VALUES ('pom', 'https://az616578.vo.msecnd.net/files/2016/06/17/636017344804814168-1934845513_PUG.jpg', '3' );

