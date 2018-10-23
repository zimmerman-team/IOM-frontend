import React from 'react';
import Table from 'antd/es/table';
import { format } from "d3-format";
import get from "lodash/get";
import BaseFilter from "../../../components/base/filters/BaseFilter";
import {connect} from "react-redux";
import {injectIntl, intlShape} from "react-intl";
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import Trans from '../../../locales/Trans';
import SortHeader from "../../../components/SortHeader/SortHeader";
import Pagination from "../../../components/Pagination/Pagination";

class ProjectsTable extends BaseFilter {
  addKey(dataSource) {
    let data = [];
    dataSource.forEach(function(item) {
      item.key = get(item, 'id');
      data.push(item);
    });
    return data;
  }

    handleChange(value, fieldName='page') {
        const { rootComponent } = this.props;
        const { filters } = rootComponent.state;
        if (get(filters.values, fieldName)) {
            delete filters.values[fieldName];
        }
        filters.values[fieldName] = value;
        filters.changed = true;
        this.setState({filters: filters});
    }

  render() {
    const { intl, data, classes, selectedSortBy, handleSortBy } = this.props;
    const usd = intl.formatMessage({id: 'currency.usd', defaultMessage: 'US$ '});
    const total = get(data, 'count', 0);
    const columns = [{
      title:
          <SortHeader
              title={intl.formatMessage({id: 'service.projects.header.project', defaultMessage: 'Donor'})}
              sortValue={selectedSortBy}
              defSortValue={'title'}
              onSort={handleSortBy}
              style={{ fontSize: 22, fontWeight: 'bold' }}
          />,
      key: 'title.narratives[0].text',
      width: '45%',
      render: obj =>
        <Link to={`/projects/${obj.id}`}>{obj.title.narratives[0].text}</Link>
    }, {
      title: <SortHeader
              title={intl.formatMessage({id: 'service.projects.header.value', defaultMessage: 'Total donor funding value'})}
              sortValue={selectedSortBy}
              defSortValue={'activity_budget_value'}
              onSort={handleSortBy}
              style={{ fontSize: 22, fontWeight: 'bold' }}
              />,
      dataIndex: 'aggregations.activity.budget_value',
      key: 'aggregations.activity.budget_value',
      className: 'number',
      render: value => <span>{usd}{format(',.0f')(value)}</span>
    }, {
      title: <SortHeader
            title={intl.formatMessage({id: 'service.projects.header.humanitarian', defaultMessage: 'Humanitarian'})}
            sortValue={selectedSortBy}
            // defSortValue={'activity_budget_value'}
            onSort={() => console.log('we need backend functionality for this')}
            style={{ fontSize: 22, fontWeight: 'bold' }}
            />,
      dataIndex: 'humanitarian',
      key: 'humanitarian',
      render: value =>
        <span>{value ? intl.formatMessage({id: 'service.projects.yes', defaultMessage: 'Yes'}) :
          intl.formatMessage({id: 'service.projects.no', defaultMessage: 'No'})}
        </span>
    },];
    return(
      <div className={classes.projectsTable}>
        <h2 className="title">
          <Trans id="service.projects.title" defaultMessage="Where the funds go"/>
        </h2>
        <Table dataSource={data ? this.addKey(data.results) : null}
               columns={columns}
               pagination={false}
               scroll={{ x: 650 }}
               className={classes.table}
               rowClassName={classes.row}
        />
          {total > 5 &&
            <Pagination pageCount={Math.ceil(total/5)}
                        onPageChange={(value) => this.handleChange(value.selected+1)}
                        forcePage={get(this.props.rootComponent.state.filters.values, 'page', 1)-1}
            />
          }
      </div>
    )
  }
}

ProjectsTable.propTypes = {
  intl: intlShape.isRequired
};

const mapStateToProps = (state, ) => {
  return {}
};

const styles = {
    row: {
      fontSize: 16,
        lineHeight: '22px',
        color: '#0033a1',
        '& td': {
            '& a': {
                color: '#0033a1',
                '&:hover': {
                    color: '#418fde',
                },
            },
        },
    },
  projectsTable: {
      width: '100%',
    paddingTop: 20,
    '& .title': {
      color: '#0033a1',
        fontSize: 26,
      fontWeight: 600,
      '@media (max-width: 767px)': {
        fontSize: '22px',
      },
    },
    '& .pagination': {
      padding: '20px 0',
    }
  },
  table: {
      marginTop: 20,
    '& tr': {
      '& td, th': {
        paddingLeft: '0px !important',
        paddingTop: 12,
        paddingBottom: 12,
      }
    }
  },
  fixedTH: {
    right: 0,
    position: 'sticky',
    backgroundColor: '#fff !important',
  },
};

export default injectSheet(styles)(connect(mapStateToProps)(injectIntl(ProjectsTable)));