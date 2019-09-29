import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LikeBtn from "../LikeBtn";
import rules from "../data.json";
import renderWithRedux from "../renderWithRedux";
import {
  doLike as MockDoLike,
  doDislike as MockDoDisLike
} from "../actions/likes-actions";

jest.mock("../actions/likes-actions", () => {
  return {
    doLike: jest.fn(id => async dispatch => {
      Promise.resolve();
      dispatch({
        type: "DO_LIKE",
        payload: id
      });
    }),
    doDislike: jest.fn(id => async dispatch => {
      Promise.resolve();
      dispatch({
        type: "DO_DISLIKE",
        payload: id
      });
    })
  };
});

describe("LikeBtn", () => {
  afterEach(() => {
    MockDoLike.mockClear();
    MockDoDisLike.mockClear();
  });

  test("should increment counter up", () => {
    const { getByTitle } = renderWithRedux(<LikeBtn pType="up" pId={1} />, {
      initialState: {
        rules
      }
    });
    const likeButtonElement = getByTitle("+1");
    fireEvent.click(likeButtonElement);
    expect(MockDoLike).toHaveBeenCalledTimes(1);
    expect(MockDoDisLike).toHaveBeenCalledTimes(0);
  });

  test("should increment counter down", () => {
    const { getByTitle } = renderWithRedux(<LikeBtn pType="down" pId={1} />, {
      initialState: {
        rules
      }
    });
    const likeButtonElement = getByTitle("-1");

    fireEvent.click(likeButtonElement);
    expect(MockDoLike).toHaveBeenCalledTimes(0);
    expect(MockDoDisLike).toHaveBeenCalledTimes(1);
  });
});
