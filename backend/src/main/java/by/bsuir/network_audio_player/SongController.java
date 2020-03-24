package by.bsuir.network_audio_player;

import by.bsuir.network_audio_player.error.SongNotFoundException;
//import by.bsuir.network_audio_player.error.SongUnSupportedFieldPatchException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.ModelAndView;

import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class SongController {

    private SongRepository repository;
    private GoogleDriveConnection con;

    @CrossOrigin
    @GetMapping("/123")
    public JSONArray getAllSongs() {
        /*Map<String, String> map = new HashMap<>();
        Song song1 = new Song("ccc", "ddd");
        Song song2 = new Song("555", "777");
        JSONObject obj = new JSONObject();
        obj.put("sn", song1);
        JSONArray list = new JSONArray();
        list.add(song1.toString());
        list.add(song2);
        obj.put("lol", list);
        map.put(song1.GetId(), song1.GetName());
        map.put(song2.GetId(), song2.GetName());*/

        con = new GoogleDriveConnection();
        return con.GetSongsByJson();

        /*JSONArray result = new JSONArray();

        JSONObject obj = new JSONObject();
        obj.put("id", "aa");
        obj.put("name", "bb");
        result.add(obj);

        JSONObject obj2 = new JSONObject();
        obj2.put("id", "nn");
        obj2.put("name", "mm");
        result.add(obj2);

        return result;*/
    }

    @GetMapping("/")
    public String home() {

        return "Home page";
    }

    // Find
    @GetMapping("/songs")
    List<Song> findAll() {
        return repository.findAll();
    }

    // Save
    //return 201 instead of 200
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/songs/save")
    Song newSong(@RequestBody Song newSong) {
        return repository.save(newSong);
    }

    // Find
    @GetMapping("/songs/{id}")
    Song findOne(@PathVariable String id) {
        return repository.findById(id)
                .orElseThrow(() -> new SongNotFoundException(id));
    }

    @RequestMapping("/showSongs")
    public ModelAndView findCities() {

        var songs = (List<Song>) repository.findAll();

        var params = new HashMap<String, Object>();
        params.put("songs", songs);

        return new ModelAndView("showSongs", params);
    }

    /*
    // Save or update
    @PutMapping("/books/{id}")
    Song saveOrUpdate(@RequestBody Song newSong, @PathVariable String id) {

        return repository.findById(id)
                .map(x -> {
                    x.setName(newSong.getName());
                    x.setAuthor(newSong.getAuthor());
                    x.setPrice(newSong.getPrice());
                    return repository.save(x);
                })
                .orElseGet(() -> {
                    newSong.setId(id);
                    return repository.save(newSong);
                });
    }

    // update author only
    @PatchMapping("/books/{id}")
    Book patch(@RequestBody Map<String, String> update, @PathVariable Long id) {

        return repository.findById(id)
                .map(x -> {

                    String author = update.get("author");
                    if (!StringUtils.isEmpty(author)) {
                        x.setAuthor(author);

                        // better create a custom method to update a value = :newValue where id = :id
                        return repository.save(x);
                    } else {
                        throw new BookUnSupportedFieldPatchException(update.keySet());
                    }

                })
                .orElseGet(() -> {
                    throw new BookNotFoundException(id);
                });

    }

    @DeleteMapping("/books/{id}")
    void deleteBook(@PathVariable Long id) {
        repository.deleteById(id);
    }*/
}
