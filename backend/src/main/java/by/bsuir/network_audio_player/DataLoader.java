package by.bsuir.network_audio_player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class DataLoader implements CommandLineRunner {

    private final SongRepository repository;

    @Autowired
    public DataLoader(SongRepository repository) {
        this.repository = repository;
    }


    @Override
    public void run(String... strings) throws Exception { }
}
