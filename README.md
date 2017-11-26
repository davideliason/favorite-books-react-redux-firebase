# favorite-books
## using react, redux, Firebase
### November 2, 2017
#### David Eliason

Objective:
To add layers of complexity and features for successfully completed my-books app, which had featured redux store and in-app store updates, no data persistence. This app will features Firebase connectivity for 1. hydrating redux store upon initiation 2. Allowing user to add books to database for persistence 3. Updating app-state store with filter value for parsing data, thus two streams of action: one for working with Firebase DB for updating data re store, and the second updatding redux store but only for rendering data.


Lessons Learned:
Part of the challenge is working with code that I'd build three weeks ago, then refactoring it to embrace the lessons learned in the meantime. There were more moving parts in this app: dialing in the Firebase database, adding new values to that database as well as retrieving those values. Filtering values obtained from the database and passing those to components. Updating local state.

Conclusion:
Heroku was working up until the very end, which is frustrating. Logs aren't helpful. So this is an area that I want to become better at.
![Favorite Books](./favorite-books.png?raw=true "working")