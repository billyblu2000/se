import React, { Component } from 'react';
import { Divider } from 'antd';
import { Link } from 'react-router-dom'
import AnimatedIcon from '../../utils/icons/AnimatedIcon'
import workInactiveData from '../../utils/icons/animation/178-work-outline-edited.json'
import workActiveData from '../../utils/icons/animation/178-work-solid-edited.json'
import homeInactiveData from '../../utils/icons/animation/41-home-outline-edited.json'
import homeActiveData from '../../utils/icons/animation/41-home-solid-edited.json'
import boltInactiveData from '../../utils/icons/animation/117-bolt-outline-edited.json'
import boltActiveData from '../../utils/icons/animation/117-bolt-solid-edited.json'
import './index.css';

export default class Header extends Component {

  state = { active: '' }

  getAnimatedIcon(inactiveData, activeData, id, tooltip=null) {
    return (
        <AnimatedIcon
          width='30px'
          height='30px'
          initActive={false}
          inactiveData={inactiveData}
          activeData={activeData}
          changeActiveTo={this.state.active === id}
          tooltip={tooltip}
          onClick={() => this.handleClick(id)}>
        </AnimatedIcon>)
  }

  handleClick(id) {
    if (id !== this.state.active) {
      this.setState({ active: id });
    }
  }

  render() {
    return (
      <div className='header'>
        <div className='header-logo'>
          <a href='/'>
            <img src='/logo/1.png' alt='logo' height='34px'></img>
          </a>
        </div>
        <div className='header-nav'>
          <div className='header-button header-me'>B</div>
          <div style={{ float: 'right', lineHeight: '50px', marginRight: '10px' }}>
            <Divider type='vertical'></Divider>
          </div>
          <Link to='/main/space/'>
            <div className='header-button header-button-nav'>
              {this.getAnimatedIcon(boltInactiveData, boltActiveData, 'bolt', 'Spaces')}
            </div>
          </Link>
          <Link to='/main/search/'>
            <div className='header-button header-button-nav'>
              {this.getAnimatedIcon(workInactiveData, workActiveData, 'work', 'Internship Search')}
            </div>
          </Link>
          <Link to='/main/home/'>
            <div className='header-button header-button-nav'>
              {this.getAnimatedIcon(homeInactiveData, homeActiveData, 'home', 'Home')}
            </div>
          </Link>
        </div>
      </div>
    )
  }
}