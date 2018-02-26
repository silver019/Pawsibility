DROP DATABASE IF EXISTS database_development;

CREATE DATABASE database_development;


USE database_development;
CREATE TABLE dogs (
 
 id INT NOT NULL AUTO_INCREMENT,
 breed VARCHAR(100),
 img VARCHAR (255),
 score INT,
 PRIMARY KEY (id)
);

INSERT INTO dogs (breed,img,score) VALUES ('pug', 'https://az616578.vo.msecnd.net/files/2016/06/17/636017344804814168-1934845513_PUG.jpg', '5');
INSERT INTO dogs (breed,img,score) VALUES ('beagel', 'https://az616578.vo.msecnd.net/files/2016/06/17/636017344804814168-1934845513_PUG.jpg', '4' );
INSERT INTO dogs (breed,img,score) VALUES ('pom', 'https://az616578.vo.msecnd.net/files/2016/06/17/636017344804814168-1934845513_PUG.jpg', '3' );
INSERT INTO dogs (breed,img,score) VALUES ('boxer', 'https://vetstreet.brightspotcdn.com/dims4/default/bd76e63/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F20%2Fcf06c09e9111e0a2380050568d634f%2Ffile%2Fboxer-5-645mk062411.jpg', '5' );

