package by.bsuir.network_audio_player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.json.simple.JSONObject;
import org.json.simple.JSONArray;

public class DataLoader implements CommandLineRunner {

    private final SongRepository repository;

    @Autowired
    public DataLoader(SongRepository repository) {
        this.repository = repository;
    }


    @Override
    public void run(String... strings) throws Exception {
        //this.repository.saveAll(GetListOfSongs());
        //JSONObject obj = new JSONObject();
        //this.repository.save(new Song("aaa","bbb"));
    }
}
