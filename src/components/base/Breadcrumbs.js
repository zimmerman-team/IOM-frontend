import React from 'react';
import Breadcrumb from 'antd/es/breadcrumb';
import { Grid, Row, Col } from 'react-flexbox-grid';
import injectSheet from "react-jss";
import { Link } from 'react-router-dom';

import { breadcrumbs as styleBreadcrumbs } from '../../helpers/style';
import './styles/Breadcrumbs.scss';


const Breadcrumbs = (props) => {
  const { classes, items, size } = props;
  const breadcrumbs = items.map((item) =>
    <Breadcrumb.Item key={item.url} className={!item.url ? classes.active : classes.noActive}>
      {item.url ? <Link className='breadcrumb-link' to={item.url}>{item.text}</Link> : item.text}
    </Breadcrumb.Item>
  );
  return (
    <Grid fluid className={classes.border}>
      <Row middle={size} className={classes.row}>
        <Col md={12} lg={12}>
          <Breadcrumb className='one-breadcrumb' separator={styleBreadcrumbs.separator}>
            {breadcrumbs}
          </Breadcrumb>
        </Col>
      </Row>
    </Grid>
  )
};

const styles = {
  container: {
    "span": {
        ".ant-breadcrumb-separator": {
            color: 'red !important',
        },
    },
  },
  border: {
    marginTop: styleBreadcrumbs.marginTop,
    borderBottom: styleBreadcrumbs.border,
  },
  row: {
    height: styleBreadcrumbs.height,
  },
  noActive: {
    color: styleBreadcrumbs.color,
    fontSize: styleBreadcrumbs.sizeFont,
  },
  active: {
    color: styleBreadcrumbs.colorActive,
    fontSize: styleBreadcrumbs.sizeFont,
  }
};

export default injectSheet(styles)(Breadcrumbs);