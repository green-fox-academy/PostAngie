DROP DATABASE IF EXISTS foxplayer;
CREATE DATABASE foxplayer;
USE foxplayer;

DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS playlists;
DROP TABLE IF EXISTS favorites;

CREATE TABLE playlists (
    id             INT AUTO_INCREMENT,
    title          TINYTEXT,
    system_rank    TINYINT(1) DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE tracks (
    id             INT AUTO_INCREMENT,
    title          VARCHAR(256),
    artist         VARCHAR(256),
    duration       INT,
    path           TINYTEXT,
    playlist_id    INT,
    PRIMARY KEY (id),
    FOREIGN KEY (playlist_id) REFERENCES playlists(id)
);

CREATE TABLE tracks_playlists (
  playlist_id INT NOT NULL,
  track_id INT NOT NULL,
  PRIMARY KEY (playlist_id, track_id),
  FOREIGN KEY (playlist_id) REFERENCES playlists(id),
  FOREIGN KEY (track_id) REFERENCES tracks(id)
);