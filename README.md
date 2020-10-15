# Rewaa-backend
This is hiring assignment for Rewaa Technologies.

Implement a simple full-stack inventory management application as a SPA (Single Page Application) based on Angular and NodeJs. You need to create two different projects for that; Frontend and Backend.

## Technologies/Dependecies
Frontend : Angular 8+ 
[https://github.com/puneet2081993/RewaaWeb]

Backend : Node.js, Express.js,

Database: Mysql

Libraries: body-parse, dotenv, winston, mysql , md5

## Use Cases

* User Login Check

* Create Product

* Fetch Products

* Update Product

* Delete Product

## USAGE
**npm install**

**npm start**

## Dummy User Credentials

**username**  : rewaa.admin

**password** : asdjkl

## API REFERENCES

**User Authentication Check**
```http
POST /user/login
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `username` | `string` | **Required**. User Name |
| `password` | `string` | **Required**. User Password |

**Create Product**
```http
POST /product/create
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `pname` | `string` | **Required**. Product Name |
| `ptype` | `string` | **Required**. Product Type |
| `pqty` | `integer` | **Required**. Product Quantity |
| `orgID` | `string` | **Required**. organisation ID of User |
| `created_by` | `string` | **Required**. User Name |

**Fetch Product**
```http
GET /product/fetch?orgID=xxx
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `orgID` | `string` | **Required**. organisation ID of User |

**Update Product Details**
```http
POST /product/update
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `pid` | `integer` | **Required**. Product ID |
| `pname` | `string` | **Required**. Product Name |
| `ptype` | `string` | **Required**. Product Type |
| `pqty` | `integer` | **Required**. Product Quantity |

**Delete Product**
```http
POST /product/delete
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `pid` | `array` | **Required**. Product ID|



## Status Codes

Rewaa returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
