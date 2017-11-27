# favorite-books
## using react, redux, Firebase
### November 2, 2017
#### David Eliason

Objective:
To add layers of complexity and features for successfully completed my-books app, which had featured redux store and in-app store updates, no data persistence. This app will features Firebase connectivity for 1. hydrating redux store upon initiation 2. Allowing user to add books to database for persistence 3. Updating app-state store with filter value for parsing data, thus two streams of action: one for working with Firebase DB for updating data re store, and the second updatding redux store but only for rendering data.


Lessons Learned:
Part of the challenge is working with code that I'd build three weeks ago, then refactoring it to embrace the lessons learned in the meantime. There were more moving parts in this app: dialing in the Firebase database, adding new values to that database as well as retrieving those values. Filtering values obtained from the database and passing those to components. Updating local state.

Conclusion:
Through trial and error becoming more comfortable with all these moving parts...

Screenshot:

Latest:
![Favorite Books](./favorite-books2.png?raw=true "v2.0")


Previous version:

![Favorite Books](./favorite-books.png?raw=true "v1.0")

## To Implement Locally
1. clone repo
2. cd into that repo
3. open terminal and $ npm install 
4. $ yarn start
