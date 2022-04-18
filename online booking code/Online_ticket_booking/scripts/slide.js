//NOW SHOWING
var i= 0;
var path = new Array();
// LIST OF IMAGES
path[0] = "images/poster/transformer.jpg";
path[1] = "images/poster/Looper.jpg";
path[2] = "images/poster/conjuring.jpg";
path[3] = "images/poster/fast.jpg";
path[4] = "images/poster/happy new year.jpg";
path[5] = "images/poster/players.jpg";

function slideImages()
{
   document.slide.src = path[i];
   if(i < path.length - 1) i++; else i = 0;
   setTimeout("slideImages()",3000);
}

//UPCOMMING MOVIE
var j= 0;
var upcomming = new Array();
// LIST OF UPCOMMIN MOVIES
upcomming[0] = "images/poster/upcomming/badrinathkidulhania.jpg";
upcomming[1] = "images/poster/upcomming/legend.jpg";
upcomming[2] = "images/poster/upcomming/scream.jpg";
upcomming[3] = "images/poster/upcomming/star wars.jpg";
upcomming[4] = "images/poster/upcomming/toystory.jpg";

function slideUpcomming()
{
   document.upcomming.src = upcomming[j];
   if(j < upcomming.length - 1) j++; else j = 0;
   setTimeout("slideUpcomming()",3000);
}
//end of upcomming poster

//Releasing next
var k= 0;
var releasing= new Array();
// LIST OF UPCOMMIN MOVIES
releasing[0] = "images/poster/releasing/bangbang.jpg";
releasing[1] = "images/poster/releasing/force.jpg";
releasing[2] = "images/poster/releasing/ghost.jpg";
releasing[3] = "images/poster/releasing/kick.jpg";
releasing[4] = "images/poster/releasing/tamasha.jpg";

function slideReleasing()
{
   document.releasing.src = releasing[k];
   if(k < releasing.length - 1) k++; else k = 0;
   setTimeout("slideReleasing()",3000);
}
//end of releasing next
