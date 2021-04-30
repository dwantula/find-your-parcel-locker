export namespace GetCoordinates {
  export type Payload = {
    q: string;
    format: 'jsonv2';
  };
}

export type Response = { data: unknown };

export type Coordinates = {
  resolve: unknown;
  reject: unknown;
};

type ActionStarted = {
  type: 'GET_ADDRESS_STARTED';
  payload: string;
};
type ActionFulfilled = {
  type: 'GET_ADDRESS_FULFILLED';
  payload: string;
};
type ActionRejected = {
  type: 'GET_ADDRESS_REJECTED';
  payload: string;
};

export type Action = ActionStarted | ActionFulfilled | ActionRejected;

export type InitialState = {
  error: string;
  data: unknown;
};
