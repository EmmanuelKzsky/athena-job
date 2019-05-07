import rootReducer from "../../reducers";

const modelConst = "PEOPLE";

const initialState = {
  error: {},
  list: [],
  message: "",
};

const mockResponse = [
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
];

const errorMochResponse = {
  errors: []
};

describe("People Reducers", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, { type: "Something" }).people).toEqual(initialState);
  });

  it("should return the reducer on loading", () => {
    const type = `GET_${modelConst}_LOADING`;
    expect(rootReducer(
      undefined,
      {
        isLoading: true,
        someOtherStuff: "Morestuff",
        type,
      },
    ).people).toEqual({
      ...initialState,
      loading: true,
      message: type,
    });
  });

  it("should get data people", () => {
    const type = `GET_${modelConst}_SUCCESS`;
    expect(rootReducer(
      {
        people: {
          ...initialState,
          loading: false,
        },
      },
      {
        type,
        response: mockResponse,
      },
    ).people).toEqual({
      ...initialState,
      loading: false,
      list: mockResponse,
      error: {},
      message: type,
    });
  });

  it("should get a people failure", () => {
    const type = `GET_${modelConst}_ERROR`;
    expect(rootReducer({
      people: {
        ...initialState,
        loading: false,
      },
    }, {
      type,
      response: errorMochResponse,
    }).people).toEqual({
      ...initialState,
      loading: false,
      error: errorMochResponse,
      list: [],
      message: type,
    });
  });
});
