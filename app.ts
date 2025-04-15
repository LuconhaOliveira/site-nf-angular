import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

var app = angular.module("mainApp",[]);

app.controller("controllerProducts",function($scope){
    class Product {
        name: string;
        priceUnity: number;
        quantity: number;
        priceFinal: number;
      
        constructor(name: string, priceUnity: number, quantity: number) {
          this.name = name;
          this.priceUnity = priceUnity;
          this.quantity = quantity;
          this.priceFinal = priceUnity * quantity;
        }
      }

    $scope.products = [];
    $scope.newArray = [];
    $scope.productName = "batata";
    $scope.productPriceUnity = 2;
    $scope.productQuantity = 3;
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
