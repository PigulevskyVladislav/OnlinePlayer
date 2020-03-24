package by.bsuir.network_audio_player;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Song {

    @Id
    private String id;
    private String name;

    public Song(String id_, String name_) {
        id = id_;
        name = name_;
    }

    @Override
    public boolean equals(Object s) {
        if (this == s) return true;
        if (s == null || getClass() != s.getClass()) return false;
        Song song = (Song) s;
        return (id == song.id) && (name == song.name);
    }

    @Override
    public int hashCode() {
        return name.hashCode() + id.hashCode();
    }

    public String GetId() {
        return this.id;
    }

    public String GetName() {
        return this.name;
    }

    @Override
    public String toString() {
        return "Song{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
