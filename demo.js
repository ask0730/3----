//简单工厂模式
var BicycleShop=function (){};
BicycleShop.prototype={
    sellBicycle:function (model) {
        var bicycle;
        switch (model){
            case "A":
                bicycle=new A();
                break;
            case "B":
                bicycle=new B();
                break;
            case "C":
                bicycle=new C();
                break;
        }
        return bicycle;
    }
}





//复杂工厂模式
var BicycleShop=function () {};
BicycleShop.prototype={
    sellBicycle:function (model){
        //让其子类来完成这个工作
        var bicycle=this.createBicycle(model);
        return bicycle;
    },
    //抽象方法，必须实现后才能调用
    createBicycle:function (model){
        throw  new Error("必须通过子类的实例才能调用此方法，进货自行侧");
    }
};





//Oracle自行车商店
var OracleBicycleShop=function (){};
//继承父类
inherits(OracleBicycleShop,BicycleShop);

OracleBicycleShop.prototype.createBicycle=function (model) {
    var bicycle;
    switch (model) {
        case "speedster":
            bicycle=new OracleSpeedster();
            break;
        case "lowrider":
            bicycle=new OracleLowrider();
            break;
        case "Alien":
            bicycle=new OracleAien();
            break;
        case "comfort cruiser":
        default:
                bicycle=new OracleComfortCruiser();
    }
    return bicycle;
}

//IBM自行车商店
var IBMBicycleShop=function () {};
//继承父类
inherits(IBMBicycleShop,BicycleShop);

IBMBicycleShop.prototype.createBicycle=function (model){
    var bicycle;
    switch (model) {
        case "speedster":
            bicycle=new IBMSpeedster();
            break;
        case "lowrider":
            bicycle=new IBMLowrider();
            break;
        case "Alien":
            bicycle=new IBMAien();
            break;
        case "comfort cruiser":
        default:
            bicycle=new IBMComfortCruiser();
    }
    return bicycle;
}


var oracle=new OracleBicycleShop();
var youNewBicycle=oracle.createBicycle("speedster");

var ibm=new IBMBicycleShop();
var myBicycle=ibm.createBicycle("speedster");