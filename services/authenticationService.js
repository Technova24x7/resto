class AuthenticationService{

    constructor(){

    }

    isAuthenticated(){
        return true;
    }

    currentUser(){
        let user  ={
            _id: "64ac3064dc5f31b0e54ee8fc",
            userName: 'ashutosh',
            password: '123456',
            phoneno: '9876543214',
            role: 'admin',
            __v: 0
          }
        
        return user;
    }

    currentRestaurant(){
        let restaurant =  {
            _id: "64ad2a3bd687922df0680c49",
            name: 'Bawarchi',
            address: 'pipli road ',
            state: 'haryana',
            city: 'city',
            phone: '789654785',
            tables: [],
            __v: 0
          };
          
          return restaurant;
    }
}
module.exports = AuthenticationService;