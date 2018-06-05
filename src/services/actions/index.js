export const HOME_DONORS_INITIAL = 'HOME_DONORS_INITIAL';
export const HOME_DONORS_REQUEST = 'HOME_DONORS_REQUEST';
export const HOME_DONORS_SUCCESS = 'HOME_DONORS_SUCCESS';
export const HOME_DONORS_FAILED = 'HOME_DONORS_FAILED';
export function homeDonorsInitial() {
  return {
    type: HOME_DONORS_INITIAL
  }
}
export function homeDonorsRequest(values) {
  return {
    type: HOME_DONORS_REQUEST,
    values: values
  }
}
export function homeDonorsSuccess(data) {
  return {
    type: HOME_DONORS_SUCCESS,
    data: data
  }
}
export function homeDonorsFailed(error) {
  return {
    type: HOME_DONORS_FAILED,
    error: error
  }
}

export const HOME_ACTIVITIES_INITIAL = 'HOME_ACTIVITIES_INITIAL';
export const HOME_ACTIVITIES_REQUEST = 'HOME_ACTIVITIES_REQUEST';
export const HOME_ACTIVITIES_SUCCESS = 'HOME_ACTIVITIES_SUCCESS';
export const HOME_ACTIVITIES_FAILED = 'HOME_ACTIVITIES_FAILED';
export function homeActivitiesInitial() {
  return {
    type: HOME_ACTIVITIES_INITIAL
  }
}
export function homeActivitiesRequest(values) {
  return {
    type: HOME_ACTIVITIES_REQUEST,
    values: values
  }
}
export function homeActivitiesSuccess(data) {
  return {
    type: HOME_ACTIVITIES_SUCCESS,
    data: data
  }
}
export function homeActivitiesFailed(error) {
  return {
    type: HOME_ACTIVITIES_FAILED,
    error: error
  }
}

export const HOME_SECTORS_INITIAL = 'HOME_SECTORS_INITIAL';
export const HOME_SECTORS_REQUEST = 'HOME_SECTORS_REQUEST';
export const HOME_SECTORS_SUCCESS = 'HOME_SECTORS_SUCCESS';
export const HOME_SECTORS_FAILED = 'HOME_SECTORS_FAILED';
export function homeSectorsInitial() {
  return {
    type: HOME_SECTORS_INITIAL
  }
}
export function homeSectorsRequest(values) {
  return {
    type: HOME_SECTORS_REQUEST,
    values: values
  }
}
export function homeSectorsSuccess(data) {
  return {
    type: HOME_SECTORS_SUCCESS,
    data: data
  }
}
export function homeSectorsFailed(error) {
  return {
    type: HOME_SECTORS_FAILED,
    error: error
  }
}

export const DONORS_INITIAL = 'DONORS_INITIAL';
export const DONORS_REQUEST = 'DONORS_REQUEST';
export const DONORS_SUCCESS = 'DONORS_SUCCESS';
export const DONORS_FAILED = 'DONORS_FAILED';
export function donorsInitial() {
  return {
    type: DONORS_INITIAL
  }
}
export function donorsRequest(values) {
  return {
    type: DONORS_REQUEST,
    values: values
  }
}
export function donorsSuccess(data) {
  return {
    type: DONORS_SUCCESS,
    data: data
  }
}
export function donorsFailed(error) {
  return {
    type: DONORS_FAILED,
    error: error
  }
}

export const DONOR_INITIAL = 'DONOR_INITIAL';
export const DONOR_REQUEST = 'DONOR_REQUEST';
export const DONOR_SUCCESS = 'DONOR_SUCCESS';
export const DONOR_FAILED = 'DONOR_FAILED';
export function donorInitial() {
  return {
    type: DONOR_INITIAL
  }
}
export function donorRequest(values) {
  return {
    type: DONOR_REQUEST,
    values: values
  }
}
export function donorSuccess(data) {
  return {
    type: DONOR_SUCCESS,
    data: data
  }
}
export function donorFailed(error) {
  return {
    type: DONOR_FAILED,
    error: error
  }
}

export const DONOR_PROJECTS_INITIAL = 'DONOR_PROJECTS_INITIAL';
export const DONOR_PROJECTS_REQUEST = 'DONOR_PROJECTS_REQUEST';
export const DONOR_PROJECTS_SUCCESS = 'DONOR_PROJECTS_SUCCESS';
export const DONOR_PROJECTS_FAILED = 'DONOR_PROJECTS_FAILED';
export function donorProjectsInitial() {
  return {
    type: DONOR_PROJECTS_INITIAL
  }
}
export function donorProjectsRequest(values) {
  return {
    type: DONOR_PROJECTS_REQUEST,
    values: values
  }
}
export function donorProjectsSuccess(data) {
  return {
    type: DONOR_PROJECTS_SUCCESS,
    data: data
  }
}
export function donorProjectsFailed(error) {
  return {
    type: DONOR_PROJECTS_FAILED,
    error: error
  }
}

export const COUNTRIES_INITIAL = 'COUNTRIES_INITIAL';
export const COUNTRIES_REQUEST = 'COUNTRIES_REQUEST';
export const COUNTRIES_SUCCESS = 'COUNTRIES_SUCCESS';
export const COUNTRIES_FAILED = 'COUNTRIES_FAILED';
export function countriesInitial() {
  return {
    type: COUNTRIES_INITIAL
  }
}
export function countriesRequest(values) {
  return {
    type: COUNTRIES_REQUEST,
    values: values
  }
}
export function countriesSuccess(data) {
  return {
    type: COUNTRIES_SUCCESS,
    data: data
  }
}
export function countriesFailed(error) {
  return {
    type: COUNTRIES_FAILED,
    error: error
  }
}

export const COUNTRY_INITIAL = 'COUNTRY_INITIAL';
export const COUNTRY_REQUEST = 'COUNTRY_REQUEST';
export const COUNTRY_SUCCESS = 'COUNTRY_SUCCESS';
export const COUNTRY_FAILED = 'COUNTRY_FAILED';
export function countryInitial() {
  return {
    type: COUNTRY_INITIAL
  }
}
export function countryRequest(values) {
  return {
    type: COUNTRY_REQUEST,
    values: values
  }
}
export function countrySuccess(data) {
  return {
    type: COUNTRY_SUCCESS,
    data: data
  }
}
export function countryFailed(error) {
  return {
    type: COUNTRY_FAILED,
    error: error
  }
}

export const COUNTRY_DONORS_INITIAL = 'COUNTRY_DONORS_INITIAL';
export const COUNTRY_DONORS_REQUEST = 'COUNTRY_DONORS_REQUEST';
export const COUNTRY_DONORS_SUCCESS = 'COUNTRY_DONORS_SUCCESS';
export const COUNTRY_DONORS_FAILED = 'COUNTRY_DONORS_FAILED';
export function countryDonorsInitial() {
  return {
    type: COUNTRY_DONORS_INITIAL
  }
}
export function countryDonorsRequest(values) {
  return {
    type: COUNTRY_DONORS_REQUEST,
    values: values
  }
}
export function countryDonorsSuccess(data) {
  return {
    type: COUNTRY_DONORS_SUCCESS,
    data: data
  }
}
export function countryDonorsFailed(error) {
  return {
    type: COUNTRY_DONORS_FAILED,
    error: error
  }
}

export const COUNTRY_ACTIVITIES_INITIAL = 'COUNTRY_ACTIVITIES_INITIAL';
export const COUNTRY_ACTIVITIES_REQUEST = 'COUNTRY_ACTIVITIES_REQUEST';
export const COUNTRY_ACTIVITIES_SUCCESS = 'COUNTRY_ACTIVITIES_SUCCESS';
export const COUNTRY_ACTIVITIES_FAILED = 'COUNTRY_ACTIVITIES_FAILED';
export function countryActivitiesInitial() {
  return {
    type: COUNTRY_ACTIVITIES_INITIAL
  }
}
export function countryActivitiesRequest(values) {
  return {
    type: COUNTRY_ACTIVITIES_REQUEST,
    values: values
  }
}
export function countryActivitiesSuccess(data) {
  return {
    type: COUNTRY_ACTIVITIES_SUCCESS,
    data: data
  }
}
export function countryActivitiesFailed(error) {
  return {
    type: COUNTRY_ACTIVITIES_FAILED,
    error: error
  }
}

export const PROJECTS_INITIAL = 'PROJECTS_INITIAL';
export const PROJECTS_REQUEST = 'PROJECTS_REQUEST';
export const PROJECTS_SUCCESS = 'PROJECTS_SUCCESS';
export const PROJECTS_FAILED = 'PROJECTS_FAILED';
export function projectsInitial() {
  return {
    type: PROJECTS_INITIAL
  }
}
export function projectsRequest(values) {
  return {
    type: PROJECTS_REQUEST,
    values: values
  }
}
export function projectsSuccess(data) {
  return {
    type: PROJECTS_SUCCESS,
    data: data
  }
}
export function projectsFailed(error) {
  return {
    type: PROJECTS_FAILED,
    error: error
  }
}

export const SERVICES_INITIAL = 'SERVICES_INITIAL';
export const SERVICES_REQUEST = 'SERVICES_REQUEST';
export const SERVICES_SUCCESS = 'SERVICES_SUCCESS';
export const SERVICES_FAILED = 'SERVICES_FAILED';
export function servicesInitial() {
  return {
    type: SERVICES_INITIAL
  }
}
export function servicesRequest(values) {
  return {
    type: SERVICES_REQUEST,
    values: values
  }
}
export function servicesSuccess(data) {
  return {
    type: SERVICES_SUCCESS,
    data: data
  }
}
export function servicesFailed(error) {
  return {
    type: SERVICES_FAILED,
    error: error
  }
}

export const SERVICE_INITIAL = 'SERVICE_INITIAL';
export const SERVICE_REQUEST = 'SERVICE_REQUEST';
export const SERVICE_SUCCESS = 'SERVICE_SUCCESS';
export const SERVICE_FAILED = 'SERVICE_FAILED';
export function serviceInitial() {
  return {
    type: SERVICE_INITIAL
  }
}
export function serviceRequest(values) {
  return {
    type: SERVICE_REQUEST,
    values: values
  }
}
export function serviceSuccess(data) {
  return {
    type: SERVICE_SUCCESS,
    data: data
  }
}
export function serviceFailed(error) {
  return {
    type: SERVICE_FAILED,
    error: error
  }
}

export const PROJECT_INITIAL = 'PROJECT_INITIAL';
export const PROJECT_REQUEST = 'PROJECT_REQUEST';
export const PROJECT_SUCCESS = 'PROJECT_SUCCESS';
export const PROJECT_FAILED = 'PROJECT_FAILED';
export function projectInitial() {
  return {
    type: PROJECT_INITIAL
  }
}
export function projectRequest(id) {
  return {
    type: PROJECT_REQUEST,
    id: id
  }
}
export function projectSuccess(data) {
  return {
    type: PROJECT_SUCCESS,
    data: data
  }
}
export function projectFailed(error) {
  return {
    type: PROJECT_FAILED,
    error: error
  }
}

export const PROJECT_LOCATION_INITIAL = 'PROJECT_LOCATION_INITIAL';
export const PROJECT_LOCATION_REQUEST = 'PROJECT_LOCATION_REQUEST';
export const PROJECT_LOCATION_SUCCESS = 'PROJECT_LOCATION_SUCCESS';
export const PROJECT_LOCATION_FAILED = 'PROJECT_LOCATION_FAILED';
export function projectLocationInitial() {
  return {
    type: PROJECT_LOCATION_INITIAL
  }
}
export function projectLocationRequest(code) {
  return {
    type: PROJECT_LOCATION_REQUEST,
    code: code
  }
}
export function projectLocationSuccess(data) {
  return {
    type: PROJECT_LOCATION_SUCCESS,
    data: data
  }
}
export function projectLocationFailed(error) {
  return {
    type: PROJECT_LOCATION_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_INITIAL = 'TRANSACTIONS_AGGREGATIONS_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_REQUEST = 'TRANSACTIONS_AGGREGATIONS_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_SUCCESS = 'TRANSACTIONS_AGGREGATIONS_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_FAILED = 'TRANSACTIONS_AGGREGATIONS_FAILED';
export function transactionsAggregationsInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_INITIAL
  }
}
export function transactionsAggregationsRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_REQUEST,
    values: values
  }
}
export function transactionsAggregationsSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_REGIONS_INITIAL = 'TRANSACTIONS_AGGREGATIONS_REGIONS_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_REGIONS_REQUEST = 'TRANSACTIONS_AGGREGATIONS_REGIONS_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_REGIONS_SUCCESS = 'TRANSACTIONS_AGGREGATIONS_REGIONS_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_REGIONS_FAILED = 'TRANSACTIONS_AGGREGATIONS_REGIONS_FAILED';
export function transactionsAggregationsRegionsInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_REGIONS_INITIAL
  }
}
export function transactionsAggregationsRegionsRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_REGIONS_REQUEST,
    values: values
  }
}
export function transactionsAggregationsRegionsSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_REGIONS_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsRegionsFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_REGIONS_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_COUNTRIES_INITIAL = 'TRANSACTIONS_AGGREGATIONS_COUNTRIES_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_COUNTRIES_REQUEST = 'TRANSACTIONS_AGGREGATIONS_COUNTRIES_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_COUNTRIES_SUCCESS = 'TRANSACTIONS_AGGREGATIONS_COUNTRIES_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_COUNTRIES_FAILED = 'TRANSACTIONS_AGGREGATIONS_COUNTRIES_FAILED';
export function transactionsAggregationsCountriesInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_COUNTRIES_INITIAL
  }
}
export function transactionsAggregationsCountriesRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_COUNTRIES_REQUEST,
    values: values
  }
}
export function transactionsAggregationsCountriesSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_COUNTRIES_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsCountriesFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_COUNTRIES_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_INITIAL = 'TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_REQUEST = 'TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_SUCCESS = 'TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_FAILED = 'TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_FAILED';
export function transactionsAggregationsActivityStatusInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_INITIAL
  }
}
export function transactionsAggregationsActivityStatusRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_REQUEST,
    values: values
  }
}
export function transactionsAggregationsActivityStatusSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsActivityStatusFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_SECTOR_INITIAL = 'TRANSACTIONS_AGGREGATIONS_SECTOR_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_SECTOR_REQUEST = 'TRANSACTIONS_AGGREGATIONS_SECTOR_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_SECTOR_SUCCESS = 'TRANSACTIONS_AGGREGATIONS_SECTOR_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_SECTOR_FAILED = 'TRANSACTIONS_AGGREGATIONS_SECTOR_FAILED';
export function transactionsAggregationsSectorInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_SECTOR_INITIAL
  }
}
export function transactionsAggregationsSectorRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_SECTOR_REQUEST,
    values: values
  }
}
export function transactionsAggregationsSectorSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_SECTOR_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsSectorFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_SECTOR_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_INITIAL =
  'TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_REQUEST =
  'TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_SUCCESS =
  'TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_FAILED =
  'TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_FAILED';
export function transactionsAggregationsParticipatingOrganisationInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_INITIAL
  }
}
export function transactionsAggregationsParticipatingOrganisationRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_REQUEST,
    values: values
  }
}
export function transactionsAggregationsParticipatingOrganisationSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsParticipatingOrganisationFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_FAILED,
    error: error
  }
}