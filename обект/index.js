let me ={
    name:"Abdumanon",
    surname:"ilxomov",
    age:13,
    passport: {
        serries: "AC",
        number:"229727326729",
        born: "26_03_2010",
        gender:"male"

        
    }

}

let ratio = {

    height: 165 ,
    weight: 54,

    status:"marreid",
    wifes: " Шахина , Наташа ,  Лазиза,",

    parrents : {

    Otasi:"",
    Onasi:"",
    Opasi:"",
    Ukasi:""
    

    
    }
    



}




console.log(
    Object.assign(me, {ratio}),
    Object.keys(me),
    Object.values(me)
);



