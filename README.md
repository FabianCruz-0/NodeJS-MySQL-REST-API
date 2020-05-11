# NodeJS-MySql-REST-API
simple REST API made up with Express.js and MySql. <br>
Don't have client's interface, just endpoints. <br>
#### *The database is working remotely, so if you change values it would affect the database.*
<hr> 

### HOW TO USE:
In order to access to the endpoints you need a software like **`Postman`** or any other who can do HTTP Requests. <br>
You can access to the endpoints using  with: <br>
### **GET:** <br>

*'/ ' (Root folder)*
~~~
 >Return a list of employees with their own ID's. <br>
~~~
*'/id ' (Root folder)*
~~~
>Return an employee with the Id passed.
~~~
### **POST:** <br>
*'/api/ '*
~~~
>In the body section you can set a new employee with the values of:
~~~
* Id (int)
* Nombre (srting)
* salary (float)


### **PUT:** <br>
*'/id ' (Root folder)*
~~~
>In the body section you can update an employee with the values of:
~~~
* Id (int)
* Nombre (srting)
* salary (float)



### **DELETE:**<br>
*'/id ' (root folder)*
~~~
> This action would delete an employee from the Data Base.
~~~
