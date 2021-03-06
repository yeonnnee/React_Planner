# Y_PLANNER

Manage Daily, Monthly plans and Challenges web application with React

## Contributor

Seung Yeon Choung

## Project Period

2020.09.07 ~ 2020.10.31

2021.01.27(_updated_)

## Index

- [Demo](#demo)
- [Features](#features)
- [Requirements](#requirements)

- Getting started

  - [clone](#clone)
  - [Setting DB table](#table)
  - [Setting .env](#setting)
  - [Run project](#start)

## <div id="demo">Demo</div>

![Preview](./public/img/preview.png)
![Monthly](./public/img/monthly.png)
![Edit Monthly](./public/img/editMonthly.png)
![Challenge Record](./public/img/challengeRecord.png)
![Challenge](./public/img/challenges.png)

## <div id="features">Features</div>

v.2.0. updated

- UI updated
- Improved Monthly page
- Add Preview page

:one: _Preview_

Monthly, Challenge, Tasks displayed briefly, you can check them at a glance.
But this page is for read-only, so you can't modify data.

:two: _Tasks_

You can check which one has been finished and which one still remains at a glance.

:three: _Monthly_

You can manage monthly plans.

:four: _Challenge_

After the challenge is created, 30 day record page will be created. Challenge starts a day after challenges created. The check button will be enabled to the corresponding date, yet this button will be disabled after the date has passed. As the challenge is completed, the percentage rate of success will be displayed on the list.

Challenge has three status,

- Ready
- In Progress
- Finished

According to the status of challenge, you can filter the list.

## <div id="requirements">Requirements</div>

- Node `v12.x` and above

- mysql

[download mysql](https://dev.mysql.com/downloads/mysql/)

[download node](https://nodejs.org/ko/)

## Getting started

#### <div id="clone">git clone</div>

```
$ git clone https://github.com/yeonnnee/React_Planner
```

#### <div id="table">Create TABLE</div>

:one: _**users**_

| Field     | Type        | Null | Key | Default           | Extra             |
| --------- | ----------- | ---- | --- | ----------------- | ----------------- |
| id        | varchar(36) | NO   | PRI | NULL              |                   |
| name      | varchar(10) | NO   |     | NULL              |                   |
| email     | varchar(80) | NO   |     | NULL              |                   |
| password  | varchar(60) | NO   |     | NULL              |                   |
| createdAt | datetime    | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| updatedAt | datetime    | YES  |     | NULL              |                   |
| deletedAt | datetime    | YES  |     | NULL              |                   |

:two: _**tasks**_

| Field   | Type        | Null | Key | Default | Extra |
| ------- | ----------- | ---- | --- | ------- | ----- |
| id      | varchar(36) | NO   | PRI | NULL    |       |
| content | varchar(50) | NO   |     | NULL    |       |
| status  | varchar(10) | NO   |     | NULL    |       |
| userId  | varchar(80) | YES  |     | NULL    |       |

:three: _**plans**_

| Field  | Type        | Null | Key | Default | Extra |
| ------ | ----------- | ---- | --- | ------- | ----- |
| id     | varchar(36) | NO   | PRI | NULL    |       |
| date   | varchar(16) | NO   |     | NULL    |       |
| writer | varchar(80) | YES  |     | NULL    |       |

:four: _**contents**_

| Field  | Type        | Null | Key | Default | Extra |
| ------ | ----------- | ---- | --- | ------- | ----- |
| id     | varchar(36) | NO   | PRI | NULL    |       |
| text   | varchar(30) | NO   |     | NULL    |       |
| planId | varchar(36) | YES  |     | NULL    |       |

:five: _**challenges**_

| Field       | Type        | Null | Key | Default           | Extra             |
| ----------- | ----------- | ---- | --- | ----------------- | ----------------- |
| id          | varchar(36) | NO   | PRI | NULL              |                   |
| title       | varchar(20) | NO   |     | NULL              |                   |
| status      | varchar(8)  | NO   |     | NULL              |                   |
| achievement | varchar(4)  | YES  |     | NULL              |                   |
| createdAt   | datetime    | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| updatedAt   | datetime    | YES  |     | Null              |                   |
| challenger  | varchar(80) | YES  |     | NULL              |                   |

:six: _**records**_

| Field          | Type         | Null | Key | Default           | Extra             |
| -------------- | ------------ | ---- | --- | ----------------- | ----------------- |
| id             | int unsigned | NO   | PRI | NULL              | auto_increment    |
| day            | varchar(6)   | NO   |     | NULL              |                   |
| status         | varchar(7)   | YES  |     | NULL              |                   |
| date           | varchar(16)  | NO   |     | NULL              |                   |
| createdAt      | datetime     | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| updatedAt      | datetime     | YES  |     | Null              |                   |
| challengeTitle | varchar(20)  | YES  |     | NULL              |                   |

:seven: _**reasons**_

| Field        | Type         | Null | Key | Default | Extra          |
| ------------ | ------------ | ---- | --- | ------- | -------------- |
| id           | int unsigned | NO   | PRI | NULL    | auto_increment |
| deleteReason | varchar(10)  | NO   |     | NULL    |                |
| account      | varchar(80)  | NO   |     | NULL    |                |

#### <div id=".env">.env</div>

Find `.env.example` file, and set values.
Default values also can be changed depending on you.

:exclamation: :exclamation: After fill out the contents, please rename the file to `.env` :exclamation: :exclamation:

| Variable           | Description                  | Default                    |
| ------------------ | ---------------------------- | -------------------------- |
| DATABASE_NAME      | database name                | N/A                        |
| DATABASE_USER_NAME | database user name           | N/A                        |
| DATABASE_PW        | database password            | N/A                        |
| DATABASE_DIALECT   | DBMS                         | `"mysql" `                 |
| DATABASE_HOST      | database host name           | `"localhost" `             |
| DATABASE_PORT      | database port number         | `3306 `                    |
| SESSION_SECRET     | password for session option  | N/A                        |
| PORT               | connect server port          | `3000 `                    |
| TARGET             | target url for setting proxy | `"http://localhost:3000/"` |

#### <div id="start">Run Project</div>

- server

```
$ npm run start:server
```

- client

```
$ npm run start:client
```
