$(document).ready(function() {
  const game = new Game()
  const finalframe = new FinalFrame()
  const MAX_SINGLE_ROLL_PTS = 10

  
  $('#submit').click(function(){
    const firstBall = parseInt($('#ball-1').val())
    const secondBall = parseInt($('#ball-2').val())
    _checkFrameValidity(firstBall, secondBall)
    if (!isLastFrame()) {
      enterNormalFrame(firstBall, secondBall);
    } else {enterFinalFrame(firstBall, secondBall)}
    updateScore()
    if (game._gameOver()) {
      _removeInputArea()
    }
    if (!finalframe._isNotEligibleForBonus()) {
      _addBonusForm()
      game.currentFrame --
    }
   
  });

  $('#submit-bonus').click(function(){
    const bonusBall = parseInt($('#ball-3').val())
    finalframe.bonusRoll(bonusBall)
    $(`#${game.currentFrame}.bonus-bowl`).text(bonusBall)
    updateScore()
    _removeInputArea()
  })

  $('#reset').click(function(){
    location.reload();
  })

  function updateScore () {
    game.sharingInfoWithFrames();
    game.getFramesScores()
    $('.total').text(game.finalScore())
  }

  function isLastFrame() {
    return game.currentFrame === 9
  }

  function enterNormalFrame(firstBall, secondBall) {
    const frame = new Frame();
    frame.firstRoll(firstBall);
    frame.secondRoll(secondBall);
    $(`#${game.currentFrame}.first-bowl`).text(firstBall)
    $(`#${game.currentFrame}.second-bowl`).text(secondBall)
    game.addFrame(frame)
  }

  function enterFinalFrame(firstBall, secondBall) {
    finalframe.firstRoll(firstBall);
    finalframe.secondRoll(secondBall);
    $(`#${game.currentFrame}.first-bowl`).text(firstBall)
    $(`#${game.currentFrame}.second-bowl`).text(secondBall)
    game.addFrame(finalframe)    
  }

  function _addBonusForm () {
    $('#bonus-form').removeClass('hidden')
  }
  
  function _removeInputArea () {
    $('#enter-frame').addClass('hidden')
    $('#bonus-form').addClass('hidden')
  }

  function _checkFrameValidity(firstBall, secondBall) {
    if (_isFrameInvalid(firstBall, secondBall)) {
      $('.errormessage').text('invalid amount of points for single frame (max is 10)')
    }
    else {$('.errormessage').empty()};
  };

  function _isFrameInvalid(firstBall, secondBall) {
    return (firstBall + secondBall > MAX_SINGLE_ROLL_PTS);
  }

});
