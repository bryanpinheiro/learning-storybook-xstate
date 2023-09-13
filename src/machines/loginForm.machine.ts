import { assign, createMachine } from "xstate";

export const loginFormMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBkD2UCWA7ABAMVQCcBbHAWQEMBjAC2zADoCqBXWSHAUWIowBscASSwAHFgBcGAZRqoA7tihce-HAAkwfETgAqYAB7iAxN14DhY8TgDCNClhgQA2gAYAuolAjUsDOIyoWJ4g+ogAbAAsAKwMLgAcUREAnADMAIxpKQBMSQA0IACeiFkuWQwpcWlhVVlhKWFhAOxpAL4t+WiYuAQk5NR0WIzMbBymqhYS0rIKDspm6praeoZGAKpYAGaorOwQc+OiEq4eSCDevv6BwaEIUZHlEfVhWXFZaY11+UUI9SkMWY0XC40i4olE4nFHhE2h10Nh8ERSJRaPQmNsRnsxuZDpIZPJFPsBBotLoDMY8XJjsFzn4AkFTjcIi4-m8mY8ks0MpkvogomlYmlamkktUkllorUYSBOvCekj+qjhrtCUIcQw1BgIASsQsSctjDqJlZbPZHFTTjTLvTQDc0hE4gxwUlwcy6o0+dEeQgSmUKlUmXEXElXm8wlKZd1EX0UYM0TtRipsZZ1ZrtYndUsyWtNujlYaceavD5aVcGcUUi5HWlEkkQRkou6Ul7fv9AcDQeDISloe1pXDI71kQMhrmE-MjSmtbMdcTMysNRAwIWzsWrddEEywgwwsGIuKUo091FxV73lu3hVu884o0st24uH+wjBwrY0qOAAFCiwWByIh7CcFwJL8fz-Qg9lnUkVhA39-1VSwbDsBxIGXS06XXBAwgdKIkgid43gBGtGkaL04gPR0yIqO94mraJHy6Z95RjEd4z2GCwIAtUgNmdi4Mg-Vsy2VicF48D4KOdxqVXdCy29O0GAiLDqhSDkXGaRoDy9e1KyiYFGg5FSwjUiITPo2UoyHRVRzY79YLEicKWA2yOIzKDjFEziEJNZDnEki1pNLG1wnBBh9MFJl3SZGjSKyGJ6iSWt0h9BKojMgcmOHOMMRE5y4Ic6YnNAvjFjcwTrJyor7ILPyiwuGSgtuOIkgYWi6kidtbxIwoN0DR1gUhSIIQqOjewjRjo0yqRxHsCAACMChMdMjQRVjUIC60QkQBI-lw5pqkSCFmSiL0AFoSji4ycPtBtbxcMNRqfOUJtRKaZvmowPPEqx318k5apLDabhOu0YgaFS7seLIoYiLrvntMpQUUzJITwxH7thBinsst9yvzZNvK6JRloANQoPgWDAIwKTWurAs22473+eJsnBQ8huO7rMKrQMqiBKJ0kaG8kjS8bsZY7K8cmAmCRJsmKaMBclxqldacB4ompasFEnBfmwk7Dnvi3PkeaM0EBYhLIRax19xeVT78vxHjcrE-is2p5W0Lpxl7QFFT+f5xTAxhr1AUaBTojuZk72eQUrYsm2srt53PMmbilE+13501JW-pVgGMOiflkjIjJa2aOImhinSYe2u9CPqOOX2YxPP2Tr6GGl2ZZfJynFZp-PZLvB02RcTdxW1vcvSaMOo404MXnifTG4yqzhPttVO6JnEcFJnuqemfu11k5SWsL2pmQ5Yisin4jYmyOfXkDG8HylLBUEXeBTjG63mKk1WMOBqkbcdQkgQ2yNDWGiAzpigYIGQ8bUjJvD5MvZ6ONhKS3EH-AeDUsKhQOpUPWxtlKnUyBEWIwZGwfAPDkCuKCxYt0xEtNUjlpzpkzpg-y-9ZI3QUjkZIt4mrMmIqeO6sC7qvCDNWFGFQ6EJx+iqQCqZWHzHYVgo+DUMhbkihCKoYI0gV25JzTRDAxRVH0cGY27xGiyObvI9elg1H1XpiUR0uF8KCkipfL0YIyEpEMgCc64UbGZTsW3RRU505t1UZw7B9MqgOhvJ2OuB5dJhBDs8UKd0dzCk3MCYWD1Mbx1seVexkwWGRMqhBEq+pHFe15B8FqIpwT2hFLeTSnMPhlEBA0WsuE7p5OCS9aaWA5rfH+uo+mikdKxRFLWPcQYNJaWFOQvW1YUgug+IkQZaCJZMPxkhQmX0d5yzALUtWPwYahTtKPUBzQXiClOopVxN5khOheFhWK2zbat0qe3TeRzd4UzORhQyCkK5BmdKPCsx4p54VgYZJkfiTK1Hum0IAA */
  id: "Login Form Machine",

  predictableActionArguments: true,

  initial: "Focused Email Input",

  schema: {
    events: {} as | {
      type: "Email Input Changed";
      value: string;
    } | {
      type: "Password Input Changed";
      value: string;
    } | {
      type: "Unfocused Email Input";
      value: string;
    } | {
      type: "Unfocused Password Input";
      value: string;
    } | {
      type: "Password Input Focused";
      value: string;
    } | {
      type: "Email Input Focused";
      value: string;
    } | {
      type: "Show";
      value: string;
    } | {
      type: "Hide";
      value: string;
    }
  },

  context: {
    hasInteracted: false,
    isEmailValid: true,
    emailFormInput: "",
    isPasswordValid: true,
    passwordFormInput: "",
  },

  states: {
    "Focused Email Input": {
      states: {
        "Showing Email Help Text": {
          on: {
            "Email Input Changed": {
              actions: "assignEmailInputToContext",
              target: "Showing Email Help Text",
              internal: true
            },

            "Unfocused Email Input": "#Login Form Machine.Standby",
            Show: "Hiding Email Help Text"
          }
        },

        "Hiding Email Help Text": {
          on: {
            "Email Input Changed": {
              actions: "assignEmailInputToContext",
              target: "Hiding Email Help Text",
              internal: true
            },

            "Unfocused Email Input": "#Login Form Machine.Standby",
            Hide: "Showing Email Help Text"
          }
        },

        "Changing Input Value": {
          on: {
            Hide: "Hiding Email Help Text",
            Show: "Showing Email Help Text"
          }
        }
      },

      initial: "Changing Input Value"
    },

    "Focused Password Input": {
      states: {
        "Hiding Password Help Text": {
          on: {
            "Password Input Changed": {
              actions: "assignPasswordInputToContext",
              target: "Hiding Password Help Text",
              internal: true
            },

            "Unfocused Password Input": "#Login Form Machine.Standby",
            Hide: "Showing Password Help Text"
          }
        },

        "Showing Password Help Text": {
          on: {
            "Password Input Changed": {
              actions: "assignPasswordInputToContext",
              target: "Showing Password Help Text",
              internal: true
            },

            "Unfocused Password Input": "#Login Form Machine.Standby",
            Show: "Hiding Password Help Text"
          }
        },

        "Changing Input Value": {
          on: {
            Hide: "Hiding Password Help Text",
            Show: "Showing Password Help Text"
          }
        }
      },

      initial: "Changing Input Value"
    },

    Standby: {
      on: {
        "Email Input Focused": "Focused Email Input",
        "Password Input Focused": "Focused Password Input"
      }
    }
  },

}, {
  actions: {
    assignEmailInputToContext: assign((context, event) => {
      const isEmailValid = event.value.length !== 0;
      const isPasswordValid = context.passwordFormInput.length !== 0;

      if (!context.hasInteracted) {
        if (isPasswordValid) {
          return {
            emailFormInput: event.value,
            isEmailValid: isEmailValid,
            isPasswordValid: isPasswordValid,
            hasInteracted: true,
          }
        } else {
          return {
            emailFormInput: event.value,
            isEmailValid: isEmailValid,
          }
        }
      } else {
        return {
          emailFormInput: event.value,
          isEmailValid: isEmailValid,
        }
      }
    }),
    assignPasswordInputToContext: assign((context, event) => {
      const isPasswordValid = event.value.length !== 0;
      const isEmailValid = context.emailFormInput.length !== 0;

      if (!context.hasInteracted) {
        if (isEmailValid) {
          return {
            passwordFormInput: event.value,
            isEmailValid: isEmailValid,
            isPasswordValid: isPasswordValid,
            hasInteracted: true,
          }
        } else {
          return {
            passwordFormInput: event.value,
            isPasswordValid: isPasswordValid,
          }
        }
      } else {
        return {
          passwordFormInput: event.value,
          isPasswordValid: isPasswordValid,
        }
      }
    })
  }
});