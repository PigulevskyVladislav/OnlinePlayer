package by.bsuir.network_audio_player;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface SongRepository extends JpaRepository<Song, String> {

    //Collection<Song> FindSongById(String id);
}
