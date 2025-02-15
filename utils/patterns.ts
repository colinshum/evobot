export const videoPattern = /^(https?:\/\/)?(www\.)?(m\.|music\.)?(youtube\.com|youtu\.?be)\/.+$/;
export const playlistPattern = /^.*(list=)([^#\&\?]*).*/;
export const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
export const mobileScRegex = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
export const isURL = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
export const spotifySongPattern = /^https?:\/\/(open\.spotify\.com)\/(track)\/(.*)$/;
export const spotifyAlbumPattern = /^https?:\/\/(open\.spotify\.com)\/(album)\/(.*)$/;
export const spotifyPlaylistPattern = /^https?:\/\/(open\.spotify\.com)\/(playlist)\/(.*)$/;
