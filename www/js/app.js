// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    //errorfunc=function(){}
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.directive('compile', ['$compile', function ($compile) {
    return function(scope, element, attrs) {
        scope.$watch(
            function(scope) {
                // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
            },
            function(value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
            }
        );
    };
}])

.controller("AppCtrl", function($scope,$http,$localStorage,$ionicModal,$ionicLoading,$ionicPopup,$timeout,$window){
$scope.Math=Math;
//$localStorage.$reset();

errorfunc=function(d){
  if (String(d.src).includes('.jpg')){

for (i=0;i<$scope.possibles.length;i++){
if ($scope.possibles[i].profile_image_url==String(d.src)){
  //alert($scope.possibles[i].profile_image_url)

$scope.$apply(function(){
  //alert('babe')
//alert($scope.possibles[i].profile_image_url.substring($scope.possibles[i].profile_image_url.length-11,$scope.possibles[i].profile_image_url.length));
if ($scope.possibles[i].profile_image_url.substring($scope.possibles[i].profile_image_url.length-13,$scope.possibles[i].profile_image_url.length)=='_original.jpg'){
return;
}

if ($scope.possibles[i].profile_image_url.substring($scope.possibles[i].profile_image_url.length-11,$scope.possibles[i].profile_image_url.length)=='_normal.jpg'){
  $scope.possibles[i].profile_image_url=$scope.possibles[i].profile_image_url.replace('_normal.jpg','_original.jpg')
return;
}

if($scope.possibles[i].profile_image_url.substring($scope.possibles[i].profile_image_url.length-11,$scope.possibles[i].profile_image_url.length)=='_bigger.jpg'){

  $scope.possibles[i].profile_image_url=$scope.possibles[i].profile_image_url.replace('_bigger.jpg','_normal.jpg')
return;
}

$scope.possibles[i].profile_image_url=$scope.possibles[i].profile_image_url.replace('.jpg','_bigger.jpg')
//alert($scope.possibles[i].profile_image_url)
//$scope.possibles[i].profile_image_url=$scope.possibles[i].profile_image_url.replace('.jpeg','.jpg')

})
}

}

  }

}


$scope.confirm=function(){
     var confirmPopup = $ionicPopup.confirm({
     template:'<div style="text-align:center"><i style="font-size:40vmin;color:red" class="icon ion-refresh"></i></div>'
   });

   confirmPopup.then(function(res) {
     if(res) {
       $localStorage.record=[0,0];
       $localStorage.tweets=[];
       $scope.closeModalmenu();
     }
   });
}


$scope.synonymy=function(){

if (navigator.appVersion.indexOf("iPhone") > 0 ){
$window.open("http://itunes.apple.com/us/app/synonymy-lite/id938998017?ls=1&mt=8",'_system');
}else if(navigator.appVersion.indexOf("Android") > 0){
$window.open("http://play.google.com/store/apps/details?id=air.com.jarvisfilms.synonymylite",'_system');
}else{
$window.open('http://www.synonymy-game.com/', '_system', 'location=yes')
}

};

$scope.tmm=function(){
  $window.open('http://www.typemymusic.com','_system');
}

$scope.caissa=function(){
  $window.open('http://www.caissajs.com','_system');
}

$scope.sugarsweet=function(){
  if (navigator.appVersion.indexOf("Android") > 0 ){
  $window.open('https://play.google.com/store/apps/details?id=com.jarvisfilms.sugarsweet','_blank');
}else{
  $window.open('https://itunes.apple.com/us/app/sugarsweet/id1151606636?ls=1&mt=8','_blank');
}
}

       $scope.jarvisfilms = function() {
$window.open('http://www.jarvisfilms.com', '_system', 'location=yes')
    };

              $scope.github = function() {
$window.open('https://github.com/ccj242', '_system', 'location=yes')
    };

$scope.polititruth=function(){
    if (navigator.appVersion.indexOf("Android") > 0 ){
  $window.open('https://play.google.com/store/apps/details?id=com.cinqmarsmedia.polititruth','_blank');
}else{
  $window.open('https://itunes.apple.com/us/app/polititruth/id1217091559?ls=1&mt=8','_system');
}
}

$scope.cinq=function(){
  $window.open('http://www.cinqmarsmedia.com','_system');
}


           $scope.stumbleupon = function() {
$window.open('http://bit.ly/1R6IRRD', '_system', 'location=yes')
    };

            $scope.birdsupstairs = function() {
$window.open('http://www.youtube.com/embed/2rI_em4MscE?rel=0&autoplay=1', '_system', 'location=yes')
    };

$scope.facebook=function(){
  $window.open('https://www.facebook.com/sharer/sharer.php?u=Who%20Tweeted%20is%20a%20free%20new%20game%20where%20you%20guess%20which%20celebrity%20tweeted%20what%3A%20www.whotweeted.com','_system');

}
           $scope.twitter = function() {
$window.open('https://twitter.com/intent/tweet?text=Who%20Tweeted%20is%20a%20free%20new%20game%20where%20you%20guess%20which%20celebrity%20tweeted%20what:%20www.whotweeted.com', '_system', 'location=yes')
    };

$scope.googleplus=function(){
 $window.open('https://plus.google.com/share?url=Who%20Tweeted%20is%20a%20free%20new%20game%20where%20you%20guess%20which%20celebrity%20tweeted%20what%3A%20www.whotweeted.com','_system');

}

$ionicModal.fromTemplateUrl('menu.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modaltwo = modal;
  });
  $scope.openModalmenu = function() {
  $scope.record=$localStorage.record;
    $scope.modaltwo.show();
    $scope.menu=true;
   
  };
  $scope.closeModalmenu = function() {
$scope.menu=false;
    $scope.modaltwo.hide();
  };

$scope.$on('modal.hidden', function() {
    $scope.menu=false;
  });



if (typeof $localStorage.tweets == 'undefined'){
  $localStorage.tweets=[];
}

if (typeof $localStorage.record == 'undefined'){
$localStorage.record=[0,0];
}

  //--------------------------//



$scope.calltwitter=function(){

$scope.username="chriscinqmars"
//$scope.username="barackobama"

 $scope.outgoingdata={"user":$scope.username                    
                 };

$ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    })
// send credentials for custom screenname?

$http({
                method:'POST',
                url: '', //**backend**
                data: $scope.outgoingdata,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function(response) {
              //$scope.newgame(response);
              //if (response.errors){alert('Rate Limit Exceeded');return;}
              //$localStorage.lastcall=response;

              $ionicLoading.hide();
              $localStorage.lastcall=response;
              $localStorage.epochlastcall=new Date().getTime();

               $scope.newgame(response);

                
            }).error(function(response) {
              $ionicLoading.hide();
              if (!response){$scope.calltwitter()}
                alert('Server error: '+JSON.stringify(response))
              
            });

}



//alert($localStorage.lastcall.length+' '+dedpulicated.length)
//alert(JSON.stringify($localStorage.lastcall));
//------------------------------------------

$scope.linkopen=function(content){

if (content.substring(0,1)=='#'){
  //alert(content)
}

if (content.substring(0,1)=='@'){
  //alert(content)
}

  //https://twitter.com/harpersbazaarus?lang=en

//https://twitter.com/hashtag/travelban?src=hash&lang=en

}

//alert($localStorage.tweets.length);
//return;

$scope.newgame=function(response){
/*
response = response.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });
*/

console.log('newgamefunc')

rand=Math.floor(Math.random() * (response.length));
if (typeof response[rand].status == 'undefined'){
  if (typeof response == 'string'){
    alert('Server Issue: '+response);return;
  }
  console.log('statusundef'); 
  $scope.newgame($localStorage.lastcall);
  return}



for (x=0;x<30;x++){
	console.log('loop for repeats')
  if ($localStorage.tweets.includes(response[rand].status.id)){
    rand=Math.floor(Math.random() * (response.length));
    continue;
  }
}



if (typeof response[rand].status.text == 'undefined'){console.log('statustextundef'); $scope.newgame($localStorage.lastcall);return}


if(response[rand].status.text.match(/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/g)){

response[rand].status.text=response[rand].status.text.replace(/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/g,'')//<a href="$1"><u>link</u></a>
if(response[rand].status.text.length<12){
	console.log('text under');
    $scope.newgame($localStorage.lastcall);return
}

/*
if (Math.floor(Math.random() * 10)>6){
  $scope.newgame($localStorage.lastcall);return
  }
  */
}

if(response[rand].status.text.includes(response[rand].screen_name)){
    console.log('refownSN')
    //$scope.newgame($localStorage.lastcall);return
}
/*
if(response[rand].status.text.substring(0,3)=='RT '){
    $scope.newgame($localStorage.lastcall);return
}

if(response[rand].status.text.substring(0,8)=='TONIGHT:'){
    $scope.newgame($localStorage.lastcall);return
}
*/
if(response[rand].status.text.match(/#ad\s/i)||response[rand].status.text.match(/order now/i)||response[rand].status.text.match(/sale/i)||response[rand].status.text.match(/buy/i)||response[rand].status.text.match(/download/i)||response[rand].status.text.match(/get tickets/i)||response[rand].status.text.match(/offerXX/i)||response[rand].status.text.match(/tixXX/i)||response[rand].status.text.match(/trailerXX/i)||response[rand].status.text.match(/check outXX/i)||response[rand].status.text.match(/subscribe/i)||response[rand].status.text.match(/premiereXX/i)){
   console.log('badd')
    $scope.newgame($localStorage.lastcall);return
}

if(response[rand].status.text.includes(response[rand].name.replace(/\s.+/g,''))){
   console.log('own name');
    $scope.newgame($localStorage.lastcall);return
}



if(response[rand].status.text.match(/(@.+)[\s,;$]/i)){

if (response[rand].status.text.split("@").length>3){
   $scope.newgame($localStorage.lastcall);return

}



  if (response[rand].status.text.replace(/\S*(@\S*)[\s,;$]/g,'').length<30){
 $scope.newgame($localStorage.lastcall);return
  }
 

 
}

if(response[rand].status.text.match(/(#.+)[\s,;$]/i)){

if (response[rand].status.text.split("#").length>3){
   
   if (Math.floor(Math.random() * 10)>5){
  $scope.newgame($localStorage.lastcall);return
  }
  
}

  if (response[rand].status.text.replace(/\S*(#\S*)[\s,;$]/g,'').length<20){
 console.log('too short after hash')
 $scope.newgame($localStorage.lastcall);return
  }
 
 
}

test=response[rand].status.text.replace(/\S*(#\S*)[\s,;$]/g,'')
test=test.replace(/\S*(@\S*)[\s,;$]/g,'')




  $scope.possibles=[];
  $scope.possibles.push(response[rand]);
  $scope.possibles[$scope.possibles.length-1].profile_image_url=$scope.possibles[$scope.possibles.length-1].profile_image_url.replace('_normal','');

  for (p=0;p<5000;p++){
    randomnumber=Math.floor(Math.random() * (response.length))
ok=true;
    for (g=0;g<$scope.possibles.length;g++){
      if (response[randomnumber].name==$scope.possibles[g].name){
        ok=false;
      }
    }
if (ok){
$scope.possibles.push(response[randomnumber])
$scope.possibles[$scope.possibles.length-1].profile_image_url=$scope.possibles[$scope.possibles.length-1].profile_image_url.replace('_normal','');


   } 
    
    if ($scope.possibles.length==5){console.log($scope.possibles);break}

  } 



$scope.possibles.sort(function(a, b){return 0.5 - Math.random()})
// randomize possibles
length=Math.floor(100*window.innerWidth/window.innerHeight);
for (b=0;b<$scope.possibles.length;b++){
    $scope.possibles[b].description=$scope.possibles[b].description.replace(/\n/i,'');



  if ($scope.possibles[b].description.length>length){
  $scope.possibles[b].description=$scope.possibles[b].description.substr(0,length)+'...';
  }
}
//alert(JSON.stringify($scope.possibles))
correctanswer=response[rand].name;
tweetid=response[rand].status.id;
$scope.fulltxt=response[rand].status.text;
$scope.corr=response[rand];
$scope.corr.status.created_at=Date.parse($scope.corr.status.created_at)
//alert(JSON.stringify($scope.corr))
$scope.url=$scope.fulltxt.match(/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/g);
//alert($scope.url)
//if ($scope.url){
//$scope.tweet=$scope.fulltxt.replace($scope.url,'')
//}else{
  $scope.tweet=$scope.fulltxt
//}
//for (i=0;i<response.length;i++){}

// WORK ON 
$scope.tweet=$scope.tweet.replace(/\S*(#\S*)[\s,;$]/g,"<span class='link' ng-click=linkopen('$1')>$1</span> ")
$scope.tweet=$scope.tweet.replace(/\S*(@\S*)[\s,;$]/g,"<span class= 'link' ng-click=linkopen('$1')>$1</span> ")
$scope.tweet=$scope.tweet.replace(/hanx/g,"")

if ($scope.tweet.length<10){
	$scope.newgame($localStorage.lastcall);return
}

}


$scope.gamemanager=function(){
//alert($localStorage.epochlastcall)
  if (typeof $localStorage.epochlastcall == 'undefined'){
    $scope.calltwitter();
    return;
  }

  if (new Date().getTime()-$localStorage.epochlastcall>43200000){
    $scope.calltwitter();
  }else{
$scope.newgame($localStorage.lastcall)
  }

}
  $scope.gamemanager();

 $scope.guess=function(pick){
$localStorage.record[1]=$localStorage.record[1]+1;
  if ($scope.possibles[pick].name == correctanswer){win=true;}else{win=false}

if (win){
$localStorage.record[0]=$localStorage.record[0]+1;
  

   var confirmPopup = $ionicPopup.confirm({
     template: '<div style="text-align:center"><i class="icon ion-checkmark" style="color:green;font-size:50vmin"></i></div>',
     buttons:[]
   });
$timeout(function(){
  $scope.gamemanager();
  confirmPopup.close();
},800)

 }else{
 var confirmPopup = $ionicPopup.confirm({
     template: '<div style="text-align:center"><i class="icon ion-close-round" style="color:red;font-size:48vmin"></i><br><b style="color:white;font-size:15vmin;line-height:12vmin;text-shadow: 2px 2px 4px #000">'+correctanswer+'</b></div>',
     buttons:[]
   });
$timeout(function(){
  $scope.gamemanager();
  confirmPopup.close();
},2000)

 }

$scope.record=$localStorage.record;
$localStorage.tweets.push(tweetid)
//$scope.openModalmodal();



 }


$scope.follow=function(ind){
 $window.open('https://twitter.com/intent/follow?screen_name='+$scope.possibles[ind].screen_name, '_system')
}



})

