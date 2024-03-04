function make_album(artist, title, tracks) {
    var albumDetails = "\" Artist: ".concat(artist, ", Title: ").concat(title, " \"");
    if (tracks !== undefined) {
        albumDetails += ",\" Tracks: ".concat(tracks, "\"");
    }
    console.log(albumDetails);
}
make_album("Atif Aslam", "Best of Atif Aslam Hits");
make_album("Arijit Singh", "Ultimate Hit Songs", 12); // Including number of tracks
make_album("Shreya Ghoshal", "Bajirao Mastani");
// // Function to create an album object
// function make_album(artist: string, title: string, tracks?: number){
//     let album: { artist: string, title: string, tracks?: number } = { artist: artist, title: title };
//     if (typeof tracks === 'number') {
//         album.tracks = tracks;
//     }
//     return album;
// }
// // Call the function to create three different albums
//  console.log(make_album("Artist1", "Album1"));
//  console.log(make_album("Artist2", "Album2", 12)); // Including number of tracks
//  console.log(make_album("Artist3", "Album3"));
// // Print each return value to show that objects are storing the album information correctly
// // console.log(album1);
// // console.log(album2);
// // console.log(album3);
