package by.bsuir.network_audio_player.error;

public class SongNotFoundException extends RuntimeException {

    public SongNotFoundException(String id) {
        super("Song id not found : " + id);
    }
}
