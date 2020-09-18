import { getTopTracks } from '../../lib/spotify';
// import { getTopTracks } from 'lib';

exports.handler = async (event, context, callback) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name
  }));

  return {
    statusCode: 200,
    body: JSON.stringify({ tracks })
  };
};