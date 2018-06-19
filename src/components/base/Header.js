import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from 'antd/es/button';
import MdMenu from 'react-icons/lib/md/menu';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaFeed from 'react-icons/lib/fa/feed';
import injectSheet from 'react-jss';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import { size as screenSize } from '../../helpers/screen';
import { variables as styleVariables } from '../../helpers/style';

import Menus from './Menus';
import Trans from '../../locales/Trans';
import logo from '../../assets/iom-logo.svg';
import logoOnly from '../../assets/iom-logo-only.svg';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.onOpenChange = this.onOpenChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }

  onOpenChange() {
    const { onOpenChange } = this.props;
    console.log(onOpenChange);
    onOpenChange()
  }

  render() {
    const { classes, match } = this.props;
    let urlPath = match.path;
    switch (urlPath) {
      case '/donors/:code':
        urlPath = '/donors';
        break;
      case '/projects/:id':
        urlPath = '/projects';
        break;
      case '/services/:id':
        urlPath = '/services';
        break;
      default:
    }

    const menuItems = [
      {url: '/', text: <Trans id='main.menu.home' text='Home' />},
      {url: '/donors', text: <Trans id='main.menu.donors' text='Donors' />},
      {url: '/countries', text: <Trans id='main.menu.countries' text='Countries' />},
      {url: '/services', text: <Trans id='main.menu.services' text='Our Services' />},
      {url: '/projects', text: <Trans id='main.menu.projects' text='Projects' />},
      {url: '/about', text: <Trans id='main.menu.about' text='About' />},
    ];

    const Logo = (props) => {
      if (props.size === 'xs') {
        return <img src={logoOnly} alt="logo" className={classes.logo} />;
      } else {
        return <img src={logo} alt="logo" className={classes.logo} />;
      }
    };

    const TriggerMenu = (props) => {
      return (
        <Row end={props.size}>
          <Col xs={3} md={2}>
            <MdMenu className={classes.triggerMenu} />
          </Col>
        </Row>
      )
    };

    const Share = (props) => {
      const { size } = props;
      return (
        <Row middle={size} className={classes.share}>
          <Col lg={12}>
            <Button shape="circle" icon="twitter" />
            <Button shape="circle"><FaFacebook className={classes.faIcon} /></Button>
            <Button shape="circle"><FaFeed className={classes.faIcon} /></Button>
            <Button shape="circle" icon="share-alt" />
          </Col>
        </Row>
      )
    };

    const Content = (props) => {
      const { size } = props;
      return (
        <Row start="xs" middle="xs" >
          <Col xs={6} md={6} lg={1}>
            <Logo size={size}/>
          </Col>
          <Col xs={6} md={6} lg={9}>
            {size === 'lg' ? <Menus items={menuItems} urlPath={urlPath} /> : null}
            {size === 'xs' || size === 'md' ? <TriggerMenu size={size} /> : null}
          </Col>
          {size === 'lg'? <Col lg={2}><Share size={size} /></Col> : null}
        </Row>
      )
    };

    return (
      <Grid fluid className={classes.header}>
        <MediaQuery maxWidth={screenSize.mobile.maxWidth}>
          <Content size="xs"/>
        </MediaQuery>
        <MediaQuery minWidth={screenSize.tablet.minWidth} maxWidth={screenSize.tablet.maxWidth}>
          <Content size="md"/>
        </MediaQuery>
        <MediaQuery minWidth={screenSize.desktop.minWidth}>
          <Content size="lg"/>
        </MediaQuery>
      </Grid>
    )
  }
}

const styles = {
  header: {
    backgroundColor: styleVariables.blue,
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.59)',
  },
  logo: {
    padding: '5px 0',
    height: 48,
  },
  triggerMenu: {
    color: 'white',
    fontSize: 40,
  },
  share: {
    float: 'right',
    '& $button': {
      marginLeft: 5,
      color: '#0033a1',
      '&:hover': {
        color: '#35b6b4',
      }
    },
    '& $button:first-child': {
      marginLeft: 0,
    }
  },
  faIcon: {
    marginTop: -3.
  }
};

const mapStateToProps = (state, ) => {
  return {};
};

export default injectSheet(styles)(withRouter(connect(mapStateToProps)(Header)));