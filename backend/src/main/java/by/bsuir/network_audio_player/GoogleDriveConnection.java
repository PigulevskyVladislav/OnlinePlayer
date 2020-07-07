package by.bsuir.network_audio_player;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;

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



public class GoogleDriveConnection {
    private static final String APPLICATION_NAME = "Network Audio Player";
    private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
    private static final String TOKENS_DIRECTORY_PATH = "tokens";

    /**
     * Global instance of the scopes required by this quickstart.
     * If modifying these scopes, delete your previously saved tokens/ folder.
     */
    private static final List<String> SCOPES = Collections.singletonList(DriveScopes.DRIVE_METADATA_READONLY);
    private static final String CREDENTIALS_FILE_PATH = "/credentials.json";

    /**
     * Creates an authorized Credential object.
     *
     * @param HTTP_TRANSPORT The network HTTP Transport.
     * @return An authorized Credential object.
     * @throws IOException If the credentials.json file cannot be found.
     */
    private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT) throws IOException {
        // Load client secrets.
        InputStream in = NetworkAudioPlayerApplication.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
        if (in == null) {
            throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);
        }
        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

        // Build flow and trigger user authorization request.
        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
                HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
                .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
                .setAccessType("offline")
                .build();
        LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
        return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
    }

    private List<Song> GetListOfSongs() throws GeneralSecurityException, IOException {
        final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
        Drive service = new Drive.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
                .setApplicationName(APPLICATION_NAME)
                .build();

        //Get folder's id by name
        String music_folder_id = "";
        String query = "mimeType='application/vnd.google-apps.folder' and name='MyMusic'";

        FileList result_music_folder = service.files().list()
                .setPageSize(1)
                .setQ(query)
                .setFields("nextPageToken, files(id)")
                .execute();
        List<File> music_folder = result_music_folder.getFiles();

        List<Song> songs = null;

        if (!(music_folder == null || music_folder.isEmpty())) {
            music_folder_id = music_folder.get(0).getId();

            // Print the names and IDs of files.
            query = "mimeType!='application/vnd.google-apps.folder' and '" + music_folder_id + "' in parents";

            FileList result = service.files().list()
                    .setQ(query)
                    .setOrderBy("name")
                    .setFields("nextPageToken, files(id, name)")
                    .execute();
            List<File> files = result.getFiles();
            if (!(files == null || files.isEmpty())) {
                songs = new ArrayList<Song>();
                for (File file : files) {
                    songs.add(new Song(file.getId(), file.getName()));
                }
            }
        }

        return songs;
    }

    public JSONArray GetSongsByJson() {
        JSONArray result = new JSONArray();

        List<Song> songs = null;

        try {
            songs = GetListOfSongs();
            for (Song song : songs) {
                JSONObject obj = new JSONObject();
                obj.put("id", song.GetId());
                obj.put("name", song.GetName());
                result.add(obj);
            }

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        return result;
    }
}
