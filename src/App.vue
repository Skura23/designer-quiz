<template>
	<div>
		<!-- <div class="music">
			<audio src="../static/22.mp3" autoplay loop hidden></audio>
		</div> -->
		<div class="music" id="">
					<a class="playback" href="#">
									<img id="play" src="../static/23.png"  />
									<img id="pause" src="../static/24.png" hidden />
					</a>
					<audio id="aud" loop autoplay hidden>
						<source src="./static/22.mp3" type="audio/mpeg" />
					</audio>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  mounted() {
    var playback = document.getElementsByClassName("playback")[0];
    var playImg = document.getElementById("play");
    var pauseImg = document.getElementById("pause");
    var song = document.getElementById("aud");
    playback.onclick = function(e) {
      e.preventDefault();
      // This next line will get the audio element
      // that is adjacent to the link that was clicked.
      // console.log(this);

      if (song.paused) {
        playImg.removeAttribute("hidden");
        pauseImg.setAttribute("hidden", true);
        song.play();
      } else {
        playImg.setAttribute("hidden", true);
        pauseImg.removeAttribute("hidden");
        song.pause();
      }
    };
  }
};
</script>

<style lang="less">
.music {
  position: absolute;
  z-index: 10;
  right: 1rem;
  top: 1rem;
  .playback {
    display: block;
  }
  #play,#pause {
    width: 1.3rem;
  }
}
</style>
