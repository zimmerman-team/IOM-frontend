import { Component } from 'react';
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import extend from "lodash/extend";


class BaseFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        aggregations: 'activity_count,incoming_fund,disbursement,expenditure,value',
        group_by: '',
        order_by: '-value',
        convert_to: 'usd',
        hierarchy: 1,
        reporting_organisation_identifier: process.env.REACT_APP_REPORTING_ORGANISATION_IDENTIFIER
      },
      update: false,
      filters: {values: {}, changed: false},
      donorTableSortBy: 'participating_organisation',
    };
  }

  actionRequest(params, groupBy, request) {
    const { dispatch } = this.props;
    const lParams = params;
    if (groupBy) {
      lParams.group_by = groupBy;
    }
    dispatch(request(lParams))
  }

  handleChange(values) {
    const { fieldName, rootComponent } = this.props;
    const { filters } = rootComponent.state;
    if (get(filters.values, fieldName)) {
      delete filters.values[fieldName];
    }
    if (!isEmpty(values)) {
      filters.values[fieldName] = Array.isArray(values) ? values.join() : values;
    }
    filters.values['page'] = 1;
    filters.changed = true;
    this.setState({filters: filters});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const rootComponent = get(this.props, 'rootComponent');
    if (rootComponent) {
      const { filters } = rootComponent.state;
      const { groupBy, filterRequest, secondFilterRequest } = rootComponent.props;
      if (filters.changed) {
        const { params } = rootComponent.state;
        this.actionRequest(extend({}, params, filters.values), groupBy, filterRequest);
        if (secondFilterRequest) {
          this.actionRequest(extend({}, params, filters.values), 'participating_organisation', secondFilterRequest);          
        }
        filters.changed = false;
        rootComponent.setState({filters: filters})
      }
    }
  }
}

BaseFilter.defaultProps = {
  groupBy: '',
  filterRequest: null,
  secondFilterRequest: null,
};

export default BaseFilter;