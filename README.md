# Choobio Web App

This is a progessive web app designed to provide additional data about the London Underground.  

You can select a station and a line, and you'll see information about the trains
arriving at that station. Each train receives a star rating based on the interval
between that train and the preceding one.  

The app works offline - it will remember lists of trains and (providing it managed
to register a service worker) will update itself even if you cannot connect
to the network.

## Technologies used
This is my first proper web app - by that I mean the first one I've got working
&#128521; - and I am using it as a playground in which I am learning some cool technologies:  

### React
I use React, bootstrapped with
[create react app](https://github.com/facebookincubator/create-react-app) which
gives it things like Webpack and Babel and uses interesting stuff like
[React Router](https://github.com/ReactTraining/react-router). The UI framework
is [Material UI](http://www.material-ui.com/#/) which is incredible.
### Progressive Web Apps
I've tried to make this as progressive as possible, using things like Service Workers,
App Manifest and [sw-precache](https://github.com/GoogleChrome/sw-precache).
I use indexedDB to store data in the browser. I also took a bunch of cues from @simonfl3tcher's
[progressive-react-app](https://github.com/simonfl3tcher/react-progressive-web-app)
repo.
### Elixir/OTP
The [backend service](https://github.com/joshvince/choob_service) is written in
Elixir, and uses OTP features such as supervision trees, fault-tolerance and
general Elixir/Erlang awesomeness.


## To install this app
- Clone this repo
- Install packages with `npm i`
- Start the development server with `npm start`
- The server will be running at port `3000`
