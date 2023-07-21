function SongList(name, length, artist, thumbnail){
    this.name = name;
    this.length = length;
    this.artist = artist;
    this.thumbnail = thumbnail;
}
// Image by <a href="https://www.freepik.com/free-psd/music-banner-design-template_17823679.htm#query=thumbnail&position=44&from_view=keyword&track=sph">Freepik</a>
const epicMix = [];

epicMix.push(new SongList("Time to Pretend", "4:19", "MGMT","images/MGMT.JPG" ))
epicMix.push(new SongList("O-o-oh Child", "2:45", " Five Stairsteps","images/five_stairsteps.JPG" ))
epicMix.push(new SongList("Wish You Were Here", "5:35", "Pink Floyd","images/pinkfloyd.JPG" ))
epicMix.push(new SongList("Heroes", "6:12", "David Bowie","images/david_bowie.JPG" ))
epicMix.push(new SongList("I Put a Spell on You", "2:38", "Nina Simone","images/nina_simone.JPG" ))
epicMix.push(new SongList("Call Me", "8:05", "Blondie","images/blondie.JPG" ))
epicMix.push(new SongList("Paper Planes", "3:25", "M.I.A.","images/MIA.JPG" ))
epicMix.push(new SongList("Jolene", "2:44", "Dolly Parton","images/Dolly_parton.JPG" ))
epicMix.push(new SongList("You Don't Own Me", "2:31", "Lesley Gore","images/Lesley_gore.JPG" ))
epicMix.push(new SongList("Fast Car", "4:57", "Tracy Chapman","images/Tracy_chapman.JPG" ))
epicMix.push(new SongList("Run the World (Girls)", "3:55", "Beyonce","images/Beyonce.JPG" ))
epicMix.push(new SongList("Superstition", "4:26", "Stevie Wonder","images/Stevie_wonder.JPG" ))
  

  const mixList = document.querySelector(".mix");
  const button = document.querySelector(".show-list");
  const total = document.querySelector(".total");
  
  button.addEventListener("click", function () {
    mixInfo(epicMix);
    mixList.classList.remove("hide");
    button.classList.add("hide");
  });
  
  total.innerText = `${epicMix.length} great songs!`;
  
  const mixInfo = function (mix) {
    mix.forEach(function (song, index) {
      let li = document.createElement("li");
      li.classList.add("song");
      li.innerHTML = `<img src="${song.thumbnail}" class="thumbnail_img"><span class="song-number">#${index + 1}</span> ${song.name} 
      <br>${song.artist} - ${song.length}`;
      mixList.append(li);
    });
  };
  
