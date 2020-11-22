# Y_PLANNER

Manage To-do-List, Monthly plans and Challenges web application with React

## Contributor

yeonnnee

## Project Period

2020.09.07 ~ 2020.10.31

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

<div>
<Img src="https://user-images.githubusercontent.com/61894688/99830094-8de09700-2ba0-11eb-8533-3bf563465456.gif" width="220px" height="300px"  alt="Tasks" />
<Img src="https://user-images.githubusercontent.com/61894688/99830276-d26c3280-2ba0-11eb-89d1-9ab545f02554.gif" width="220px" height="300px"  alt="Monthly" />
<Img src="https://user-images.githubusercontent.com/61894688/99830352-ee6fd400-2ba0-11eb-99e6-efaa40e87796.gif" width="220px" height="300px"  alt="Monthly" />
<Img src="https://user-images.githubusercontent.com/61894688/99830471-16f7ce00-2ba1-11eb-9dcd-76a1ca270b67.gif" width="220px" height="300px"  alt="Challenge" />
<Img src="https://user-images.githubusercontent.com/61894688/99830538-2ecf5200-2ba1-11eb-95ad-3a5770fe58e4.gif" width="220px" height="300px"  alt="Record" />
</div>

## <div id="features">Features</div>

:one: _Tasks_

You can check which one has been finished and which one still remains at a glance.

:two: _Monthly_

Selected Section is for plans matched with selected date and the default is today's.
If you hav any plans on selected date, the list will be shown at the selected section, or
Add button will be ativated. The others will be shown at the Other plans section by date.

:three: _Challenge_

You can create any challenges, and record page for 30 days will be created.
Challenge starts from the day after challenges created,and check btn will be enabled on corresponding date, the date has passed, check btn also disabled.
When the challenge finished, the rate of success will be shown on the list.

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
