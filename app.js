var app = angular.module("mainApp",[]);


app.service('connectiondb', ()=>{
    this.createConnection=()=>{
    var mysql = require('mysql');
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "dbNotasFiscaisTeste"
    });
    return con;
    };
    this.selectTable=()=>{
        con=createConnection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT nome,precoUnidade,quantidade,precoTotal FROM tbProdutos", function (err, result, fields) {
                if (err) throw err;
                return result.map(row=>({ 
                    name: row.nome,
                    priceUnity: row.precoUnidade,
                    quantity: row.quantidade,
                    priceFinal: row.precoTotal}));
            });
            connection.end();
        });
    };
});

app.controller("controllerProducts",function($scope, connectiondb){
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
    
    connectiondb.selectTable().then(products => {
        $scope.products = products;
        $scope.$apply();
    }).catch(err => {
        console.error(err);
    });

    console.log($scope.products);
    $scope.newArray = [];
    $scope.productName = "batata";
    $scope.productPriceUnity = 2;
    $scope.productQuantity = 3;
    $scope.addProduct=()=>{
        $scope.products.push(new Product($scope.productName,$scope.productPriceUnity,$scope.productQuantity));
        $scope.productName = "";
        $scope.productPriceUnity = 0;
        $scope.productQuantity = 0;
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
