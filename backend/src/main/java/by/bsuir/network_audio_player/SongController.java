package by.bsuir.network_audio_player;

import org.springframework.web.bind.annotation.*;
import org.json.simple.JSONArray;

@RestController
public class SongController {

    private GoogleDriveConnection con;

    @CrossOrigin
    @GetMapping("/songs")
    public JSONArray getAllSongs() {
        con = new GoogleDriveConnection();
        return con.GetSongsByJson();
    }
}
