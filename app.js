var time = new Date();
var i = 0;
var morning = false;
//var timer = new Timer();

class Alarm {
  constructor() {
    this.militaryTime = {
      hours : 0,
      minutes : 0,
      morning : false
    }
  }
  setTime(timeObj) {
    if (timeObj.hasOwnProperty('hours')) {
      this.militaryTime.hours = timeObj.hours;
    }
    if (timeObj.hasOwnProperty('minutes')) {
      this.militaryTime.minutes = timeObj.minutes;
    }
    if (timeObj.hasOwnProperty('morning')) {
      this.militaryTime.morning = timeObj.morning;
    }
  }
  getTime() {
    let minutes = this.militaryTime.minutes;
    let hours = this.militaryTime.hours;
    let alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    if (this.militaryTime.morning) {
        militaryTime.setHours(hours);
      } else {
        militaryTime.setHours(hours + 12);
    }
    return alarmTime;
  }
}

setInterval(function(){
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var ms = time.getMilliseconds();

// ampm normalize
  var hR = ( h > 12 ) ? h - 12 : h;

console.log('Time: ' + hR + ':' + m + ':' + s + ':' + ms);

  var hourLED = {
    // translate hours (12) + minutes (0-60 = 0-1) to angle (360)
    angle: (hR + ( m / 60 ) + ( s/3600 )) * 30,
    color: (h >= 12) ? 'darkred' : 'yellow',
    blend: true
  };

  var minuteLED = {
    // translate minutes ( 60 ) to angle ( 360 )
    angle: ( m + (s/60) + ( ms/60000 ) ) * 6,
    color: 'green',
    blend: true
  };

  var secondLED = {
    // translate seconds (60) to angle (360)
    angle: (s + (ms/1000)) * 6,
    color: 'darkblue',
    blend: true
    // spin: i
  };

  i = ( i < 360 ) ? i + 1 : 0;

  matrix.led([ minuteLED, hourLED, secondLED ]).render();
}, 50);

  matrix.type('time').send({
    Alarm.getTime();
  })

  matrix.on('AM', function() {
    morning = true;
  });

  matrix.on('PM', function() {
    morning = false;
  });

  matrix.on('hours', function(p){
    var hours = p.value;
  });

  matrix.on('minutes', function(p){
    var minutes = p.value;
  });

