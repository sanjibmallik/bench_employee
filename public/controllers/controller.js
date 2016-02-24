var myApp=angular.module("myApp",[]);

myApp.controller('AppCtrl',function($scope, $http){
    console.log("done by sanjib"); 
    var refresh = function(){
            $http.get('/contactList').success(function(response){ 
               $scope.contactList = response;
                console.log("I got the data I had requested ");
                $scope.contact = "";
                 $scope.addContactEnable=true;
                 $scope.updateContactEnable=false;
            });
    
    };
    refresh();
    
    $scope.addContact = function(){
        $scope.contact._id="";
        console.log($scope.contact);
        $http.post('/contactList',$scope.contact).success(function(response){
            console.log(response);
        });
        refresh();
    };
    
    $scope.remove = function(id){
        console.log(id);
        $http.delete('/contactlist/' + id).success(function(response){
            console.log(response);
            refresh();
        });
    };
    
    $scope.edit = function(id){
        $scope.addContactEnable=false;
        $scope.updateContactEnable=true;
        console.log(id);
        $http.get('/contactList/' + id).success(function(response){
            $scope.contact = response;
        })
    };
    
   $scope.update = function(id){
        $http.put('/contactList/ + id', $scope.contact).success(function(response){
            console.log("s fully went back from server");
            console.log(response);
            refresh();
        })
    };

});