import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as api from '../index';

export function* homeDonorsRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.homeDonorsSuccess(response));
  } catch (error) {
    yield put(actions.homeDonorsFailed(error));
  }
}

export function* homeActivitiesRequest(action) {
  try {
    const response = yield call(api.activitiesRequest, action.values);
    yield put(actions.homeActivitiesSuccess(response));
  } catch (error) {
    yield put(actions.homeActivitiesFailed(error));
  }
}

export function* homeSectorsRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.homeSectorsSuccess(response));
  } catch (error) {
    yield put(actions.homeSectorsFailed(error));
  }
}

export function* donorsRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.donorsSuccess(response));
  } catch (error) {
    yield put(actions.donorsFailed(error));
  }
}

export function* donorRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.donorSuccess(response));
  } catch (error) {
    yield put(actions.donorFailed(error));
  }
}

export function* donorProjectsRequest(action) {
  try {
    const response = yield call(api.activitiesRequest, action.values);
    yield put(actions.donorProjectsSuccess(response));
  } catch (error) {
    yield put(actions.donorProjectsFailed(error));
  }
}

export function* countriesRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.countriesSuccess(response));
  } catch (error) {
    yield put(actions.countriesFailed(error));
  }
}

export function* countryRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.countrySuccess(response));
  } catch (error) {
    yield put(actions.countryFailed(error));
  }
}

export function* countryDonorsRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.countryDonorsSuccess(response));
  } catch (error) {
    yield put(actions.countryDonorsFailed(error));
  }
}

export function* countryActivitiesRequest(action) {
  try {
    const response = yield call(api.activitiesRequest, action.values);
    yield put(actions.countryActivitiesSuccess(response));
  } catch (error) {
    yield put(actions.countryActivitiesFailed(error));
  }
}

export function* servicesRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.servicesSuccess(response));
  } catch (error) {
    yield put(actions.servicesFailed(error));
  }
}

export function* serviceRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.serviceSuccess(response));
  } catch (error) {
    yield put(actions.serviceFailed(error));
  }
}

export function* serviceDonorsRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.serviceDonorsSuccess(response));
  } catch (error) {
    yield put(actions.serviceDonorsFailed(error));
  }
}

export function* projectsRequest(action) {
  try {
    const response = yield call(api.activitiesRequest, action.values);
    yield put(actions.projectsSuccess(response));
  } catch (error) {
    yield put(actions.projectsFailed(error));
  }
}

export function* projectRequest(action) {
  try {
    const response = yield call(api.activityRequest, action.id);
    yield put(actions.projectSuccess(response));
  } catch (error) {
    yield put(actions.projectFailed(error));
  }
}

export function* projectLocationRequest(action) {
  try {
    const response = yield call(api.countryRequest, action.code);
    yield put(actions.projectLocationSuccess(response));
  } catch (error) {
    yield put(actions.projectLocationFailed(error));
  }
}

export function* transactionsAggregationsRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.transactionsAggregationsSuccess(response));
  } catch (error) {
    yield put(actions.transactionsAggregationsFailed(error));
  }
}

export function* transactionsAggregationsRegionsRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.transactionsAggregationsRegionsSuccess(response));
  } catch (error) {
    yield put(actions.transactionsAggregationsRegionsFailed(error));
  }
}

export function* transactionsAggregationsCountriesRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.transactionsAggregationsCountriesSuccess(response));
  } catch (error) {
    yield put(actions.transactionsAggregationsCountriesFailed(error));
  }
}

export function* transactionsAggregationsActivityStatusRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.transactionsAggregationsActivityStatusSuccess(response));
  } catch (error) {
    yield put(actions.transactionsAggregationsActivityStatusFailed(error));
  }
}

export function* transactionsAggregationsSectorRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.transactionsAggregationsSectorSuccess(response));
  } catch (error) {
    yield put(actions.transactionsAggregationsSectorFailed(error));
  }
}

export function* transactionsAggregationsParticipatingOrganisationRequest(action) {
  try {
    const response = yield call(api.transactionsAggregationsRequest, action.values);
    yield put(actions.transactionsAggregationsParticipatingOrganisationSuccess(response));
  } catch (error) {
    yield put(actions.transactionsAggregationsParticipatingOrganisationFailed(error));
  }
}

function* sagas() {
  yield [
    takeLatest('HOME_DONORS_REQUEST', homeDonorsRequest),
    takeLatest('HOME_ACTIVITIES_REQUEST', homeActivitiesRequest),
    takeLatest('HOME_SECTORS_REQUEST', homeSectorsRequest),
    takeLatest('DONORS_REQUEST', donorsRequest),
    takeLatest('DONOR_REQUEST', donorRequest),
    takeLatest('DONOR_PROJECTS_REQUEST', donorProjectsRequest),
    takeLatest('COUNTRIES_REQUEST', countriesRequest),
    takeLatest('COUNTRY_REQUEST', countryRequest),
    takeLatest('COUNTRY_DONORS_REQUEST', countryDonorsRequest),
    takeLatest('COUNTRY_ACTIVITIES_REQUEST', countryActivitiesRequest),
    takeLatest('SERVICES_REQUEST', servicesRequest),
    takeLatest('SERVICE_REQUEST', serviceRequest),
    takeLatest('SERVICE_DONORS_REQUEST', serviceDonorsRequest),
    takeLatest('PROJECTS_REQUEST', projectsRequest),
    takeLatest('PROJECT_REQUEST', projectRequest),
    takeLatest('PROJECT_LOCATION_REQUEST', projectLocationRequest),
    takeLatest('TRANSACTIONS_AGGREGATIONS_REQUEST', transactionsAggregationsRequest),
    takeLatest('TRANSACTIONS_AGGREGATIONS_REGIONS_REQUEST', transactionsAggregationsRegionsRequest),
    takeLatest('TRANSACTIONS_AGGREGATIONS_COUNTRIES_REQUEST', transactionsAggregationsCountriesRequest),
    takeLatest('TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_REQUEST', transactionsAggregationsActivityStatusRequest),
    takeLatest('TRANSACTIONS_AGGREGATIONS_SECTOR_REQUEST', transactionsAggregationsSectorRequest),
    takeLatest(
      'TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_REQUEST',
      transactionsAggregationsParticipatingOrganisationRequest
    ),
  ]
}

export default sagas;