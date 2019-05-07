import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const modelConst = 'PEOPLE';
const okResultsResponse = [
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },
  {
    'gender': 'male',
    'name': {
      'title': 'mr',
      'first': 'christoffer',
      'last': 'johansen',
    },
    'location': {
      'street': '1407 lindevej',
      'city': 'horsens',
      'state': 'danmark',
      'postcode': 78784,
      'coordinates': {
        'latitude': '-26.7458',
        'longitude': '-102.8526',
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic',
      },
    },
    'email': 'christoffer.johansen@example.com',
    'login': {
      'uuid': '3452750c-5255-4301-a213-a84f88d2b352',
      'username': 'beautifulelephant717',
      'password': 'bigdawg',
      'salt': 'wivvlbhz',
      'md5': '5b11f5b2cef187aea8b37bbe70b19519',
      'sha1': '8180bc09f36369bc8ff3dbe9db61cea6f59a555d',
      'sha256': 'c8c31f091ee248470a1f870a1d78c894cfd5b163afba73a96e5327a0553df064',
    },
    'dob': {
      'date': '1972-03-11T02:00:51Z',
      'age': 47,
    },
    'registered': {
      'date': '2006-06-29T22:15:08Z',
      'age': 12,
    },
    'phone': '55817231',
    'cell': '70517752',
    'id': {
      'name': 'CPR',
      'value': '117410-6945',
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/96.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/96.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
    },
    'nat': 'DK',
  },];
const peopleOkExpectedActions = [
  { type: `GET_${modelConst}_LOADING`, isLoading: true },
  { type: `GET_${modelConst}_LOADING`, isLoading: false },
];

const peopleErrorExpectedActions = [
  { type: `GET_${modelConst}_LOADING`, isLoading: true },
  { type: `GET_${modelConst}_ERROR`, response: {} },
  { type: `GET_${modelConst}_LOADING`, isLoading: false },
  { type: '@@redux-form/RESET' },
];
describe('actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create an action of people', () => {
    const request = fetchMock.post('https://randomuser.me/api/?results=25', {
      body: okResultsResponse,
      headers: {
        'content-type': 'application/json',
      },
    });
    const store = mockStore({});

    return store.dispatch(actions.getPeople()).then(() => {
      expect(store.getActions()).toEqual(expect.arrayContaining(peopleOkExpectedActions));
    });
  });
});
