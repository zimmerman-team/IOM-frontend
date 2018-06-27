import React, { Component } from 'react';
import Table from 'antd/es/table';
import { format } from "d3-format";
import get from 'lodash/get';
import { injectIntl, intlShape } from "react-intl";
import { Link } from 'react-router-dom';

class DonorsTable extends Component {
  addKey(dataSource) {
    let data = [];
    dataSource.results.forEach(function(item) {
      item.key = get(item, 'participating_organisation_ref');
      data.push(item);
    });
    return data;
  }

  render() {
    const { intl, data } = this.props;
    const usd = intl.formatMessage({id: 'currency.usd.symbol', defaultMessage: '$'});
    const columns = [{
      title: intl.formatMessage({id: 'donors.table.donors.header.donor', defaultMessage: 'Donor'}),
      dataIndex: 'participating_organisation',
      key: 'participating_organisation',
      width: '55%',
      render: (participating_organisation, row, index) => {
        return (
          <Link to={`/donors/${row.participating_organisation_ref.toLowerCase()}`}>
            {participating_organisation}
          </Link>
        );
      },
    }, {
      title: intl.formatMessage({id: 'donors.table.donors.header.budget', defaultMessage: 'Budget'}),
      dataIndex: 'value',
      key: 'value',
      className: 'number',
      render: value => <span>{usd}{format(",.2f")(value)}</span>
    }, {
      title: intl.formatMessage({
        id: 'donors.table.donors.header.projects.count',
        defaultMessage: 'Implementation projects'
      }),
      dataIndex: 'activity_count',
      key: 'activity_count',
      className: 'number',
    }];
    return (
      <Table className="DonorsTable" dataSource={data ? this.addKey(data) : null} columns={columns} size="middle"
             scroll={{ x: 900 }}
      />
    )
  }
}

DonorsTable.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(DonorsTable);