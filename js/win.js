/* global Controller, HUD, Helpers */

var winSound = new Audio('sounds/win_sound.mp3');

function WinScene(container){
  'use strict';
  Helpers.playSound(winSound);
  // This can be done much better by making an ajax call
  container.appendChild(Helpers.generateNode('<div class="center-parent temp-menu"><div>'+
    '<h3>You have beaten level '+Controller.level+'</h3>'+
    '<button type="button" class="nextLevel" >Play the next Level</button>'+
  '</div></div>'));
  container.querySelector('.nextLevel').addEventListener('click', function(){
    Controller.nextLevel();
  });
  HUD.updateScore(void 0, ++Controller.level);
}

