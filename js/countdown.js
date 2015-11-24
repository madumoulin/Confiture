var Today= new Date();
var Event= new Date(2016,1,17);
var distance = Event.getTime()-Today.getTime();
var second= 60-Today.getSeconds();
var minute=60-Today.getMinutes();
var hour= 24-Today.getHours();
var day=Math.floor(distance/1000/60/60/24);
var StartTime=day.toString()+":"+hour.toString()+":"+minute.toString()+":"+second.toString();

      $(function(){
        $('#counter').countdown({
          image: 'img/digits.png',
          startTime: StartTime
        });
        
      });