import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { RULES_LOADED, loadRules } from "../rules-actions";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Rules Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test("should load rules", () => {
    const store = mockStore([]);
    const expectedActions = [RULES_LOADED];

    fetchMock.get("*", {
      response: 200
    });
    store.dispatch(loadRules()).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });

    fetchMock.restore();
  });
});
