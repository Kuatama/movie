const videoPlayer = document.getElementById("videoPlayer");

// 全屏
function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    videoPlayer.requestFullscreen();
  }
}

// 小窗
async function togglePip() {
  if (document.pictureInPictureElement) {
    await document.exitPictureInPicture();
  } else {
    await videoPlayer.requestPictureInPicture();
  }
}
