import { createMachine } from "xstate";

/** @xstate-layout N4IgpgJg5mDOIC5QBkD2UCWA7ABAMVQCcBbHAWQEMBjAC2zADoBJLANwoBsMIBiANU7cKAFzABtAAwBdRKAAOqWBmEZUWWSAAeiAEwSAjAx0BmYwA5jAdmMmzZ-cYCsAGhABPRAFp9AFjMN7AE4ANn0DRwljQP1LAF9Y1zRMXAIScmo6LEYWdi5eATyRcX0ZJBAFJRU1DW0EK2CGY0idR2Cdawl241cPBE9LQx8bSx9on0tHQJCzeMT0bHwiUkpaemY2QXzNorEdUvlFZVV1MtqJnyNgiUjHCctgtpd3RCuGCUsB4I-w8ztZkCSC1Sywyaxym3421EYmM+3KhyqJ1AtTCLQYjiiA2MPmCdjCT16+h0gSMxIcJkCt1xRPiCRAWFQEDgGkBKSW6VWWQ0FSO1VOiB8jgYgScxOsIVFOn0PS8Jgaxn0IUcZh8xMpKv+rMWaRWmWyGzy3IRxxqiBFwtFgXFwUl0uefV8-iCV1a7WJwUcmvmbJ1oKyDAAyjRUAB3bBQHBgYgUDAcHAULAQHByCiwWAhohJmhgDhyHCiTTCeBlHmI00IQXGBhXAzmRXnEYyh0MPxmTr3VVExzdsxxOla4EcvWB4NhrARqMxuPZ3P5sCFo2VE38hCWFXCiQqwKRfQeywiptEkk6MlXGJ+JrvL3JbUgzmMIOh8PJ1PpzM4Gd5gvCRe8pFaRAwn0QxWhsCQ2mxbFHB8JspSrRxgL8cCfFGcYTGvIF2V1NYCm4X8yxXHQfAkYVd2id4JG3SwdDMJt+kGYYUImQIVQ9HxaViIA */
export const loginFormMachine = createMachine(
  {
    tsTypes: {} as import("./loginForm.machine.typegen").Typegen0,

    id: "Login Form Machine",

    initial: "Invalid",

    states: {
      Invalid: {
        on: {
          Validate: [
            {
              target: "Valid",
              cond: "email and password are valid",
            },
            {
              target: "Showing email and password help texts",
              cond: "email and password are invalid",
            },
            {
              target: "Showing email help text",
              cond: "email is invalid",
            },
            {
              target: "Showing password help text",
            },
          ],
        },
      },

      "Showing email and password help texts": {},

      "Showing email help text": {},

      "Showing password help text": {},

      Valid: {},
    },
  },
  {
    guards: {
      "email and password are valid": () => true,
      "email and password are invalid": () => false,
      "email is invalid": () => false,
    },
  },
);
