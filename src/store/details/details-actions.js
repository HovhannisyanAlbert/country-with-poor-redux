export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";
export const CLEAR_DETAIL = "@@details/CLEAR_DETAIL";
export const SET_NEIGHBORS = "@@details/SET_NEIGHBORS";
const setLoading = () => ({
  type: SET_LOADING,
});
const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});
const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

const setNeighbors = (neighbors) => ({
  type: SET_NEIGHBORS,
  payload: neighbors,
});

export const loadCountryByName =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => dispatch(setError(err.message)));
  };
export const clearDetail = () => ({
  type: CLEAR_DETAIL,
});

export const loadNeighbors =
  (borders) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(borders))
      .then(({ data }) =>
        dispatch(setNeighbors(data.map((country) => country.name)))
      )
      .catch((error) => console.log(error.message));
  };
