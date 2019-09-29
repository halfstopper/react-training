import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { DO_LIKE, DO_DISLIKE, doLike, doDislike } from "../likes-actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Likes Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test("should post like", () => {
    const store = mockStore([]);
    const expectedActions = [DO_LIKE];

    fetchMock.get("*", {
      response: 200
    });

    store.dispatch(doLike(5)).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  test("should post dislike", () => {
    const store = mockStore([]);
    const expectedActions = [DO_DISLIKE];

    fetchMock.get("*", {
      response: 200
    });

    store.dispatch(doDislike(15)).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
