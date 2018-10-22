import React from 'react';
import Table from 'antd/es/table';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import * as actions from '../../../services/actions';
import { connect } from 'react-redux';
import { format } from 'd3-format';
import get from 'lodash/get';
import injectSheet from "react-jss";
import { Link } from 'react-router-dom';
import SortHeader from "../../../components/SortHeader/SortHeader";


class ServiceDonors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        aggregations: 'activity_count,incoming_fund,disbursement,expenditure,value',
        page_size: 10,
        group_by: 'participating_organisation',
        reporting_organisation_identifier: process.env.REACT_APP_REPORTING_ORGANISATION_IDENTIFIER,
        order_by: 'participating_organisation',
      }
    };
    this.handleSortBy = this.handleSortBy.bind(this);
  }

  addKey(dataSource) {
    let data = [];
    dataSource.forEach(function(item) {
      item.key = get(item, 'participating_organisation_ref');
      data.push(item);
    });
    return data;
  }

  handleSortBy(value) {
    const newParams = this.state.params;
    newParams.order_by = value;
    this.setState({params: newParams}, () => {
      this.getDonors();
    });
  }

  getDonors() {
    const { dispatch, sectorId } = this.props;
    const { params } = this.state;
    if (dispatch && sectorId) {
      dispatch(actions.serviceDonorsRequest({ ...params, sector: sectorId }));
    } else {
      dispatch(actions.serviceDonorsInitial());
    }
  }

  componentDidMount() {
    this.getDonors()
  }

  render() {
    const { intl, serviceDonors, classes } = this.props;
    const usd = intl.formatMessage({id: 'currency.usd', defaultMessage: 'US$ '});
    const data = get(serviceDonors, 'data.results', null);
    const columns = [{
      title: <SortHeader
              title={intl.formatMessage({id: 'service.donors.header.donor', defaultMessage: 'Donor'})}
              sortValue={this.state.params.order_by}
              defSortValue={'participating_organisation'}
              onSort={this.handleSortBy}
              style={{fontSize: 22, fontWeight: 'bold'}}
              />,
      key: 'participating_organisation',
        className: 'title',
      width: '50%',
      render: obj =>
        <Link to={`/donors/${obj.participating_organisation_ref}`}>{obj.participating_organisation}</Link>
    }, {
      title:
          <SortHeader
              title={intl.formatMessage({id: 'service.donors.header.total', defaultMessage: 'Total donor funding value'})}
              sortValue={this.state.params.order_by}
              defSortValue={'value'}
              onSort={this.handleSortBy}
              style={{fontSize: 22, fontWeight: 'bold'}}
          />,
      dataIndex: 'value',
      key: 'value',
      className: 'number',
      render: value => <span>{usd}{format(',.2f')(value)}</span>
    },];
    return(
      <div className={classes.serviceDonors}>
        <h2 className="title">
          <FormattedMessage id="service.donors.title" defaultMessage="Where the funds come from"/>
        </h2>
        <Table
               columns={columns}
               size="middle"
               loading={serviceDonors.request}
               dataSource={data ? this.addKey(data) : null}
               className={classes.table}
        />
      </div>
    )
  }
}

ServiceDonors.propTypes = {
  intl: intlShape.isRequired
};

const mapStateToProps = (state, ) => {
  return {
    serviceDonors: state.serviceDonors,
  }
};

const styles = {
  serviceDonors: {
    paddingTop: 20,
    marginRight: 10,
    '& .title': {
      color: '#0033a1',
      fontWeight: 600,
        fontSize: 26,
      '@media (max-width: 767px)': {
        fontSize: '22px',
      },
    }
  },
  table: {
      marginTop: 30,
    '& tr': {
      '& td, th': {
        paddingLeft: '0px !important',
      }
    },
      '& .title': {
          fontSize: 16,
          fontWeight: 'normal',
          lineHeight: '22px',
          color: '#0033a1',
              '& a': {
                  color: '#0033a1',
                  '&:hover': {
                      color: '#418fde',
                  },
              },
      },
      '& .number': {
          fontSize: 22,
          fontWeight: 'normal',
          lineHeight: '22px',
          color: '#0033a1',
      }
  },
  fixedTH: {
    right: 0,
    position: 'sticky',
    backgroundColor: '#fff !important',
  }
};

export default injectSheet(styles)(connect(mapStateToProps)(injectIntl(ServiceDonors)));