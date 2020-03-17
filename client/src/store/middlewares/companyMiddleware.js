import axios from 'axios';
import { GET_ALL_COMPANIES, updateCompaniesArray } from '../reducer/company';

const companyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_COMPANIES: {

      axios({
        method: 'get',
        url: 'api/companies',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          store.dispatch(updateCompaniesArray(response.data))
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });

      break;
    }

    default: {
      next(action);
    }
  }
};

export default companyMiddleware;
