<?php
$images = [
  "./image/pekkacardpng.png",
  "./image/main-qimg-bb2e4a1fbc4c1e7cdefd2263d9a6810a.png",
  "./image/guards.png.",
  "./image/giant_skeleton.png",
  "./image/prince.png",
  "./image/baby_dragon.png"


  
];
// $cards = range(1, 6);
$cards = array_merge($images, $images); // Create pairs
shuffle($cards); // Shuffle the deck


?>
<!DOCTYPE html>
<html lang="en">


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Memory Card Game</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="scoreboard">
    <p>Score: <span id="score">0</span></p>
  </div>

  <div class="game-board">
    <?php foreach ($cards as $index => $card): ?>
      <div class="card" data-card-value="<?= basename($card) ?>">
        <div class="card-front"></div>
        <div class="card-back">
          <img src="<?= $card ?>" alt="Card Image">
        </div>
      </div>
    <?php endforeach; ?>
  </div>
  <script src="script.js"></script>
</body>


</html>