<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>打地鼠游戏 - 完整版</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>打地鼠游戏</h1>
  <div class="scoreboard">
    得分：<span id="score">0</span> ｜ 剩余时间：<span id="time">30</span> 秒
  </div>
  <button id="startBtn">开始游戏</button>
  <div class="game-container">
    <div class="hole"><div class="mole">🐹</div>🕳️</div>
    <div class="hole"><div class="mole">🐹</div>🕳️</div>
    <div class="hole"><div class="mole">🐹</div>🕳️</div>
    <div class="hole"><div class="mole">🐹</div>🕳️</div>
    <div class="hole"><div class="mole">🐹</div>🕳️</div>
    <div class="hole"><div class="mole">🐹</div>🕳️</div>
    <div class="hole"><div class="mole">🐹</div>🕳️</div>
    <div class="hole"><div class="mole">🐹</div>🕳️</div>
    <div class="hole"><div class="mole">🐹</div>🕳️</div>
  </div>

  <!-- 音效：打击、胜利、倒计时滴答 -->
  <audio id="hitSound" src="https://cdn.pixabay.com/download/audio/2022/03/11/audio_b1f5a2fdbf.mp3?filename=punch-boxing-hit-1-173079.mp3"></audio>
  <audio id="winSound" src="https://cdn.pixabay.com/download/audio/2021/09/13/audio_01fb349dd2.mp3?filename=success-1-6297.mp3"></audio>
  <audio id="tickSound" src="https://cdn.pixabay.com/download/audio/2023/03/14/audio_3e922f6fbc.mp3?filename=clock-tick-111379.mp3"></audio>

  <script src="game.js"></script>
</body>
</html>
