import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: 'name',
        artist: 'artist',
        url: 'C:/Users/Helen Sun/Desktop/stephop/source/_posts/QA-GBJ/record.mp3',
    }]
});