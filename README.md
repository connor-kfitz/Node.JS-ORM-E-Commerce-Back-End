# ORM: E-Commerce Back End

## Link

https://drive.google.com/file/d/1x3cjnE-0LiI-50YnCzcsZatFDkdXzROU/view

## Description

The purpose of this project is to complete the back-end development of an e-commerce website, using object-relational mapping.

In order to accomplish this, models and routes will need to be updated with the correct database information.  The express server will also need to be connected to sequalize, in order to sync MySql to the database.  This will also allow the CRUD operations to be executed through each route.  Testing of each operation will be completed and demonstrated in Insomnia.

## Steps Taken

1.  Created database models for the category, product tag, and tag's items.

2.  Created association methods in models/index.js to establish relationships between tables, according to specifications

3.  Created CRUD operation methods for each of the three tables in their respective routes folder.  

4.  Connected sequalize to the MySql data base in the server.js file, then seeded the data into the tables

5.  Tested each CRUD operation in Insomnia to verify it was working as intended