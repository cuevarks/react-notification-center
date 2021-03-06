## `react-notification-center-es6` [demo](http://diegoddox.github.io/react-notification-center/)

## ES6 and updated features added to `react-notification-center`.
Forked from react-notification-center created by Diego Oliveira (https://github.com/diegoddox). Original repo (https://github.com/diegoddox/react-notification-center)

### Implementation Guide

#### 1: Installation
`npm install --save react-notification-center-es6`

#### 2: Import the less file to your project
`import 'react-notification-center-es6/src/less/index.less'`

#### 3 Add the notification component
```
import ReactNotificationCenter from 'react-notification-center-es6';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications = [{
                id: 1,
                title: 'some title', // not required
                message: 'The notification text', 
                new: false, // if the user has read the notification
                tags: [{ // not required
                    type: 'success',
                    text: 'text'
                }],
                date: '09/12/2016' // not required
            }];
        };
    }
   
    render() {
        return (
            <div className="wrapper">
                <div className="your-notification-holder-class">
	             <ReactNotificationCenter
	                 notifications={this.state.notifications}
                     notificationTitle={'React notification center'}
                     noNotificationText={'No notifications. Go home!'}
                     onScrollBottom={() => console.log('You are on the bottom babay :D')}
                     onScroll={() => console.log('You are scrolling on the list')}
                     onItemClick={item => console.log('## item clicked', item)}
                     onNotificationOpen={items => console.log('## all notifications', items)}
                     onNotificationClose={items => console.log('## all notifications', items)}
                     onScroll={e => console.log('You are scrolling', e)}
               </div>
            </div>
        );
    }
}
```
In case you wanna control the notification-icon position you can do it by accessing the `react-notification-center` `css` `class`.

#### Notification tag types
`success` `info` `warning` and `danger`

#### You hate the notification data structure I've created :D
ok ok don't panic, you don't have the same data structure and you don't wanna map your current data here is what your can do. Just use the `mapToItem` `props`

```
this.mapDataToItems = {
    id: '_id',
    title: 'name',
    message: 'text',
    new: 'hasRead',
    date: 'createAt'
}

<ReactNotificationCenter
    {...}
    mapToItem={this.mapDataToItems} />
```

Sorry but you cannot map `tags` at the moment :(

#### You still don't get it `o.O`

Clone the repo and run a local demo
```
git clone https://github.com/diegoddox/react-notification-center.git 
cd react-notification-center
npm install
npm start
```

Open your browser at `http://localhost:4001` and take a look at the file `developement/App.js`