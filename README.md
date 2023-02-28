# Event timeline - Interview task

The aim of this app is to assist users in tracking job events submitted by workers.

### User experience or how will the data is displayed to the user:

1. **Separate events based on the jobs**

To access the timeline for a specific job, users must first select the job from a list. The app will group events by their corresponding job IDs to create the timeline.

1. **How timeline should look**

opted for a Dots-Lines timeline design, which allows users to easily view the following information at a glance:

- Time of the event
- Type of the event
- Name of the user that reported the event
- Icon  - dot that visually represents the event

In addition, a collapsible button will be added to allow users to access more detailed information about each event. This will include the event and job IDs, as well as the event metadata displayed in formatted JSON

**What is left out:** 

- **Filtering**: To improve usability, it would be beneficial to add filters that allow users to sort events by user, date, and event type.
- **Statistics**: Users may also find it useful to view stats based on event type for a given job, such as the number of downtime events or headcount changes.
- **Duration**: Calculating the duration of different aspects of a job can also provide valuable insights. For example, it would be helpful to determine how long the job was in progress, as well as the duration of any breaks or other interruptions.

### Tech Stack

The task has been implemented as a web app using **React** and **TypeScript**. To streamline development and improve efficiency, the following additional libraries have been utilized:

- **Material UI**: I chose to use Material UI to save time by leveraging prebuilt components and styling.
- **Date-fns**: This library has been used to format dates and times.
- **Prettier**: Code formatting can be tedious, so I've utilized Prettier to automate the process.

If this were a production-ready code, I would opt for using **Styled Components** over inline CSS, as seen in the code. Although inline CSS was more convenient for this use case, styled-components would provide a more maintainable and scalable solution.

### Testing

To ensure the quality and reliability of the app, three types of testing have been implemented: **component testing**, **end-to-end (E2E) testing**, and **unit testing**.

**[Cypress](https://www.cypress.io/)** 

- **Component testing**: to test the behaviour of individual components outside the context of the app. This helped ensure that the components functioned as expected in isolation.
- **E2E testing**: to check all the main flows of the app and user experience

**Jest** 

- **Unit tests:** To test the functionality of specific functions, such as sorting and grouping events. This helped ensure the accuracy and reliability of the app's core logic.

## Demo

**Mobile & Desktop demo**

[Screen Recording 2023-02-28 at 18.50.07.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3035e9eb-c541-4969-b7b4-8bc2a874acca/Screen_Recording_2023-02-28_at_18.50.07.mov)

[Screen Recording 2023-02-28 at 18.48.44.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0871ae31-d81a-406d-b457-546a2e0bd9f9/Screen_Recording_2023-02-28_at_18.48.44.mov)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
