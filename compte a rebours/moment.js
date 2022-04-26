var x=setInterval(function(){

    var maintenant=moment();
    var fin=moment(2023,'YYYY')
    var difference=fin-maintenant;
    var jour=fin.diff(maintenant,'days');
    const duree=moment.duration(difference,'milliseconds');
    var heures=duree._data.hours;
    var minutes=duree._data.minutes;
    var secondes=duree._data.seconds;
    
    document.getElementById('j').innerHTML='-'+jour;
    document.getElementById('h').innerHTML='0-'+heures;
    document.getElementById('m').innerHTML='0-'+minutes;
    document.getElementById('s').innerHTML='0-'+secondes;











},1000);