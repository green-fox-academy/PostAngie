DROP DATABASE IF EXISTS profiles;
CREATE DATABASE IF NOT EXISTS foxdating;
USE foxdating;


CREATE TABLE IF NOT EXISTS profiles (
    username     VARCHAR(256) NOT NULL,
    nickname    VARCHAR(256) NOT NULL,
    my_gender   ENUM ('woman', 'man') NOT NULL,
    t_gender    ENUM ('woman', 'man', 'both') NOT NULL,
    birth_year  INT NOT NULL,
    picture      VARCHAR(400),
    about_me    VARCHAR(5000),
    PRIMARY KEY (username),
    UNIQUE (username)
);

CREATE TABLE IF NOT EXISTS likes (
    source_username VARCHAR(256),
    target_username VARCHAR(256),
    PRIMARY KEY (source_username, target_username),
    FOREIGN KEY (source_username) REFERENCES profiles(username),
    FOREIGN KEY (target_username) REFERENCES profiles(username)
);

CREATE TABLE IF NOT EXISTS matches (
    source_username VARCHAR(256),
    matched_username VARCHAR(256),
    PRIMARY KEY (source_username, matched_username),
    FOREIGN KEY (source_username) REFERENCES profiles(username),
    FOREIGN KEY (matched_username) REFERENCES profiles(username)
);

insert into profiles (username, nickname, my_gender, t_gender, birth_year, picture, about_me) 
values 
('acollingdon0', 'Arny', 'woman', 'woman', 1955, 'https://robohash.org/quisilloquisquam.png?size=50x50&set=set1', null),
('jhockell1', 'Jeanette', 'man', 'man', 1997, 'https://robohash.org/eoslaudantiumautem.png?size=50x50&set=set1', 'Integer non velit.'),
('cdecastri2', 'Chelsey', 'woman', 'man', 1953, 'https://robohash.org/idrerumsed.png?size=50x50&set=set1', ''),
('bstrangward3', 'Blake', 'woman', 'both', 1991, 'https://robohash.org/enimsolutavoluptatum.png?size=50x50&set=set1', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.'),
('fhusk4', 'Faulkner', 'man', 'man', 1994, 'https://robohash.org/modimagninon.png?size=50x50&set=set1', ''),
('cdoge5', 'Cece', 'man', 'man', 1998, 'https://robohash.org/inevenietvelit.png?size=50x50&set=set1', 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.'),
('ograssett6', 'Oliy', 'woman', 'both', 1985, 'https://robohash.org/eosautemminus.png?size=50x50&set=set1', 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'),
('gsudlow7', 'Gordy', 'man', 'man', 1949, 'https://robohash.org/iustoutet.png?size=50x50&set=set1', null),
('gpopworth8', 'Giffer', 'man', 'man', 2003, 'https://robohash.org/iustoeasunt.png?size=50x50&set=set1', ''),
('cmccurdy9', 'Cathe', 'woman', 'both', 1949, 'https://robohash.org/eaqueeossed.png?size=50x50&set=set1', 'Etiam pretium iaculis justo. In hac habitasse platea dictumst.'),
('nalexsandrova', 'Neville', 'woman', 'man', 1952, 'https://robohash.org/rerumcumqueid.png?size=50x50&set=set1', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'),
('sacostab', 'Shurwood', 'woman', 'woman', 1962, 'https://robohash.org/etquiadolorem.png?size=50x50&set=set1', ''),
('treolfic', 'Tessa', 'man', 'woman', 1977, 'https://robohash.org/idnihilvoluptatem.png?size=50x50&set=set1', 'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.'),
('rvanderweedenburgd', 'Roobbie', 'man', 'woman', 1930, 'https://robohash.org/quoetearum.png?size=50x50&set=set1', ''),
('dobrollachaine', 'Dolley', 'man', 'woman', 1934, 'https://robohash.org/quiaculpaasperiores.png?size=50x50&set=set1', 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.'),
('sbrecknallf', 'Staford', 'man', 'woman', 1940, 'https://robohash.org/facilisquoeum.png?size=50x50&set=set1', 'Suspendisse ornare consequat lectus.'),
('cwaythingg', 'Charlotta', 'man', 'woman', 1996, 'https://robohash.org/nonrerumunde.png?size=50x50&set=set1', null),
('msmithymanh', 'Marja', 'man', 'woman', 2003, 'https://robohash.org/harumetoptio.png?size=50x50&set=set1', ''),
('nferrarini', 'Nathalie', 'woman', 'both', 1965, 'https://robohash.org/eosquocorporis.png?size=50x50&set=set1', ''),
('kmilthorpej', 'Karoly', 'man', 'woman', 1970, 'https://robohash.org/possimusautminima.png?size=50x50&set=set1', 'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.');