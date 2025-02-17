# BACKEND FOR PAXCEL APPLICATION

## DB STRUCTURE
-[x] USERS
    - ID
    - NAME
    - EMAIL
    - PHONE
    - ADDRESS
    - PASSWORD
    - CREATED_AT
    - UPDATED_AT 

-[X] SHIPMENT
    - TRACKING_NUMBER
    - SENDER -> fk to users
    - RECEIVER -> fk to receiver
    - FROM_LOCATION
    - TO_LOCATION
    - CURRENT_LOCATION
    - DATE ( ESTIMATED_TIME)
    - STATUS
    - CREATED_AT
    - UPDATED_AT 

-[x] LOCATION:
    - LONG
    - LAT
    - NAME
    - SHIPMENT_ID

-[x] RECEIVER
    - NAME
    - ADDRESS
    - PHONE
    - CREATED_AT
    - UPDATED_AT 


-[x] PAYMENT
    - TRANSACTION_ID AUTO UNIQUE
    - SHPMENT_ID FK -> SHIPMENT
    - OWNER FK -> USER
    - PRODUCT_ID FK -> PRODUCT
    - METHOD ( ETH, CREDIT, BANK)
    - AMOUNT
    - BALANCE
    - CREDIT
    - CREATED_AT
    - UPDATED_AT 

-[x] PRODUCTS
    - NAME
    - WEIGHT
    - TYPE
    - DIMENSION
    - CREATED_AT
    - UPDATED_AT 

## DB CONNECTIONS FOR Postgres
- use `sequelize` package
- use `.env` to keep environmental variables
- install `sequelize`; type: 
    ```sh
    npm install --save pg pg-hstore
    ```
- create a `dbconf.js` file to create db connection conf
    ```js
    const {Sequelize} = require("sequelize");
    // option 1
    const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
    
    // option 2
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'path/to/database.sqlite'
    });

    // option 3
    const sequelize = new Sequelize("database","username","password",{
        host:"host",
        dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    });
    ```
- test the connection 
    ```js 
    try{
        await sequelize.authenticate();
        console.log("Connection established successfully")
    }catch(error){
        console.error("Unable to connect to db", error);
    }
    ```
 - learn more [Sequelize Tutorial](https://sequelize.org/docs/v6)
