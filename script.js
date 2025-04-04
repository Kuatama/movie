const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");

// 加载视频地址（JSON 方式）
fetch("videos.json")
  .then(res => res.json())
  .then(data => {
    videoSource.src = data.video.src;
    videoPlayer.load();
  })
  .catch(err => {
    console.error("加载视频失败：", err);
  });

// 全屏功能
function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    videoPlayer.requestFullscreen();
  }
}

// 小窗播放（画中画）
async function togglePip() {
  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await videoPlayer.requestPictureInPicture();
    }
  } catch (error) {
    console.error("小窗播放失败：", error);
  }
}
