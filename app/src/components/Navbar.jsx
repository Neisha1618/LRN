import React, { useState } from 'react';
import {
  Link, Switch, Route,
} from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import { v1 as uuid } from 'uuid';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import Sessions from './Sessions.jsx';
import Logout from './Logout.jsx';
import CreateSession from './CreateSession.jsx';
import CreateRoom from '../routes/CreateRoom';
import Room from './Room.jsx';
import Board from './Board.jsx';
import Canvas from './Canvas.jsx';

import 'semantic-ui-css/semantic.min.css';
import logo from '../styles/images/logo.png';

const Navbar = ({ user, googleLogin }) => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const id = uuid();
  // console.log(user.id, 'NAVBAR');
  return (
    <div>

      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          <Link to="/">
            <Image src={logo} size="mini" alt="LRN logo" />
          </Link>
        </Menu.Item>

        <Menu.Item
          name="sessions"
          active={activeItem === 'sessions'}
          onClick={handleItemClick}
        >
          <Link to="/profile" class="item">Profile</Link>
        </Menu.Item>

        <Menu.Item
          name="profile"
          active={activeItem === 'profile'}
          onClick={handleItemClick}
        >
          <Link to="/sessions" class="item">Sessions</Link>
        </Menu.Item>
        <Menu.Item
          name="room"
          active={activeItem === 'room'}
          onClick={handleItemClick}
        >
          <Link to={`/room/${id}`} class="item">Room</Link>
        </Menu.Item>

        <Menu.Item
          name="board"
          active={activeItem === 'board'}
          onClick={handleItemClick}
        >
          <Link to="/board" class="item">Whiteboard</Link>
        </Menu.Item>

        <Menu.Item
          name="canvas"
          active={activeItem === 'canvas'}
          onClick={handleItemClick}
        >
          <Link to="/canvas" class="item">Canvas</Link>
        </Menu.Item>


        {user ? <a>You are logged in</a> 
        :
        <Menu.Menu position="right" class="right menu">
        <Menu.Item
          name="login"
          active={activeItem === 'logout'}
          onClick={googleLogin}
        >
          <Link class="item">Login</Link>
        </Menu.Item>
      </Menu.Menu>
      }

        {/* LOG OUT NOT FUNCTIONAL */}
        {/* <Menu.Menu position="right" class="right menu">
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          >
            <Link to="/logout" class="item">Logout</Link>
          </Menu.Item>
        </Menu.Menu> */}
      </Menu>

      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" render={() => (<Profile user={user} />)} />
          <Route exact path="/sessions" component={Sessions} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/create" component={CreateSession} />
          <Route exact path="/registered" component={Sessions} />
          <Route path="/room/:roomID" component={Room} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/canvas" component={Canvas} />
          <Route exact path="/create" component={CreateSession} />
        </Switch>
      </div>
    </div>
  );
};

export default Navbar;
