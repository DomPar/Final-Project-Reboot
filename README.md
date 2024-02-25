# Final-Project-Reboot

### Authentication Endpoints

The Authentication flow for the application is:

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup              | `name`, `email`, `password`,                    | { message: `string`, result: `token` }
POST   | /auth/login      | -     | user | User Login               | `email`, `password`                             | { message: `string`, result: `token` }

### User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /user/profile    | YES   | user | Get Own profile          |                                                 | { message: `string`, result: `object` }
GET    |/user/profile/others| YES | user | Get others profiles      |                                                 | { message: `string`, result: `object` }
PUT    | /user/profile    | YES   | user | Update own Profile       |    `name`, `email`, `username`,                 | { message: `string`, result: `object` }
PUT    |/user/me/password | YES   | user | Change Own Password      |    `password`                                   | { message: `string`, result: `object` }
DELETE | /user/profile    | YES   | user | Delete Own Profile       |    `name`, `email`, `password`, `username`      | { message: `string`, result: `object` }

### Post Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /post            | YES   | user | Get All Post             |                                                 | { message: `string`, result: `array` }
GET    | /post/:id        | YES   | user | Get One Post             |                                                 | { message: `string`, result: `object` }
POST   | /post            | YES   | user | Create One Post          |  `media`, `description`, `title`, `id_users`    |  { message: `string`, result: `object` } 
PUT    | /post/:id        | YES   | user | Update One Post          |  `media`, `description`, `title`, `id_users`    | { message: `string`, result: `object` }   -
DELETE | /post/:id        | YES   | user | Delete his own Post      |                          -                      | { message: `string`, result: `object` }

### Shelters Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /shelter         | YES   | user | Get All Shelters         |                                                 | { message: `string`, result: `array` }
GET    | /shelter/:id     | YES   | user | Get One Shelter          |                                                 | { message: `string`, result: `object` }
POST   | /shelter         | YES   |admin | Create One Shelter       |  `id_manager`, `cif`, `enterprise_name`, `phone`|  { message: `string`, result: `object` } -
PUT    | /shelter/:id     | YES   |admin | Update One Shelter       |  `id_manager`, `cif`, `enterprise_name`, `phone`| { message: `string`, result: `object` }
PUT    | /shelter/add/:id | YES   | user |Add 1 Shelter to favorites|                     -                           | { message: `string`, result: `object` }
PUT    |/shelter/remove/:id| YES  | user | Remove from my favorites |                     -                           | { message: `string`, result: `object` }  
DELETE |/shelter/:id       | YES  |admin | Delete One Shelter       |                                                 | { message: `string`, result: `object` }

### Categories Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|-------------------
GET    | /categories      | YES   | user | Get All Categories       |                                                 | { message: `string`, result: `array` }
GET    |/categorie/:id    | YES   | user | Get One Categories       |                                                 | { message: `string`, result: `object` }

### Services Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /services        | YES   | user | Get All Services         |                                                 | { message: `string`, result: `array` }
GET    | /service/:id     | YES   | user | Get One Service          |                                                 | { message: `string`, result: `object` }
PUT    | /service/add/:id | YES   | user |Add 1 Service to favorites|                     -                           | { message: `string`, result: `object` }
PUT    |/service/remove/:id| YES  | user | Remove from my favorites |                     -                           | { message: `string`, result: `object` }  
