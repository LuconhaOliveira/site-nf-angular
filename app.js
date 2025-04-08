var app = angular.module("mainApp",[]);

app.controller("controllerProducts",function($scope){
    class Product{
        name;
        priceUnity;
        quantity;
        priceFinal;

        constructor(name,priceUnity,quantity){
            this.name=name;
            this.priceUnity=priceUnity;
            this.quantity=quantity;
            this.priceFinal=priceUnity*quantity;
        }
    }

    $scope.products = [];
    $scope.newArray = [];
    $scope.addProduct=()=>{
        $scope.products.push(new Product($scope.productName,$scope.productPriceUnity,$scope.productQuantity));
        $scope.productName = "";
        $scope.productPriceUnity = "";
        $scope.productQuantity = "";
    }
    $scope.orderByHeader=(header)=>{
        $scope.orderByFilter=header;
    }
    $scope.deleteProduct=()=>{
        for(let i=0;i<$scope.products.length;i++){
            if($scope.selectedProduct!=i){
                $scope.newArray.push($scope.products[i]);
            }
        }
        $scope.products = $scope.newArray;
        $scope.newArray = [];
        $scope.selectedProduct = "?";
    }
});
