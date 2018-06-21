import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {injectIntl, intlShape} from 'react-intl';
import injectSheet from 'react-jss';
import PropsType from 'prop-types';

import SearchFilter from '../SearchFilter';
import AccordionFilter from './AccordionFilter';
import Filter from './Filter';
import StartEndDateFilter from './StartEndDateFilter';
import * as actions from '../../../services/actions';

class Filters extends Component {
  defaultPanels() {
    const { intl, rootComponent } = this.props;
    return [{
      headerString: intl.formatMessage({id: 'filters.panel.country', defaultMessage: 'Geo-location'}),
      component:
        <Filter rootComponent={rootComponent}
                placeholder={
                  intl.formatMessage({
                    id: 'filters.select.country.placeholder',
                    defaultMessage: 'Select country'
                  })
                }
                reducerName="transactionsAggregationsCountries"
                optionKeyName="recipient_country.code"
                optionValueName="recipient_country.name"
                groupBy="recipient_country"
                fieldName="recipient_country"
                actionRequest={actions.transactionsAggregationsCountriesRequest}
        />
    },{
      headerString: intl.formatMessage({id: 'filters.panel.project.type', defaultMessage: 'Project type'}),
      component:
        <Filter rootComponent={rootComponent}
                placeholder={
                  intl.formatMessage({
                    id: 'filters.select.project.type.placeholder',
                    defaultMessage: 'Select project type'
                  })
                }
                reducerName="transactionsAggregationsSector"
                optionKeyName="sector.code"
                optionValueName="sector.name"
                groupBy="sector"
                fieldName="sector"
                actionRequest={actions.transactionsAggregationsSectorRequest}
        />
    },{
      headerString: intl.formatMessage({id: 'filters.panel.project.status', defaultMessage: 'Project status'}),
      component:
        <Filter rootComponent={rootComponent}
                placeholder={
                  intl.formatMessage({
                    id: 'filters.select.project.status.placeholder',
                    defaultMessage: 'Select project status'
                  })
                }
                reducerName="transactionsAggregationsActivityStatus"
                optionKeyName="activity_status.code"
                optionValueName="activity_status.name"
                groupBy="activity_status"
                fieldName="activity_status"
                actionRequest={actions.transactionsAggregationsActivityStatusRequest}
        />
    },{
      headerString: intl.formatMessage({id: 'filters.panel.period', defaultMessage: 'Start - end data'}),
      component:
        <StartEndDateFilter rootComponent={rootComponent} />
    },{
      headerString: intl.formatMessage({id: 'filters.panel.donors', defaultMessage: 'Donors'}),
      component:
        <Filter rootComponent={rootComponent}
                placeholder={
                  intl.formatMessage({
                    id: 'filters.select.donors.placeholder',
                    defaultMessage: 'Select donor'
                  })
                }
                reducerName="transactionsAggregationsParticipatingOrganisation"
                optionKeyName="participating_organisation_ref"
                optionValueName="participating_organisation"
                groupBy="participating_organisation"
                fieldName="participating_organisation_ref"
                actionRequest={actions.transactionsAggregationsParticipatingOrganisationRequest}
        />
    }];
  }

  render() {
    const { intl, rootComponent, classes, panels } = this.props;
    return (
      <Fragment>
        <Row className={classes.filters}>
          <Col xs={12}>
            <SearchFilter
              rootComponent={rootComponent}
              placeholder={
                intl.formatMessage({id: 'filters.search.placeholder', defaultMessage: 'Search'})
              }
              fieldName="q"
            />
          </Col>
        </Row>
        <AccordionFilter rootComponent={rootComponent} panels={panels ? panels : this.defaultPanels()} />
      </Fragment>
    )
  }
}

Filters.propTypes = {
  intl: intlShape.isRequired,
  rootComponent: PropsType.object,
  panels: PropsType.array,
};

const styles = {
  filters: {
    marginTop: 20
  },
};

export default injectSheet(styles)(injectIntl(Filters));