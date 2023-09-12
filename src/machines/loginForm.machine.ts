import { assign, createMachine } from "xstate";

export const loginFormMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBkD2UCWA7ABAMVQCcBbHAWQEMBjAC2zADoCqBXWSHAUWIowBscASSwAHFgBcGAZRqoA7tihce-HAAkwfETgAqYAB7iAxN14DhY8TgDCNClhgQA2gAYAuolAjUsDOIyoWJ4g+ogAzGEuDACcAOwAjC4AHABMLi4ArPEZKSkANCAAnohR8bGxSQAsLmXxaWEpAGyVjbEAvm0FaJi4BCTk1HRYjMxsHKaqFhIMahgQispm6praeoYmKuaiEjZ2DpCuHkgg3r7+gcGhCBFRcfGJLtEuDckZBcUI8Y1hDLG5uY8WvEwo1mh0uuhsPgiKRKLR6ExUKx2BAcAAFCiwWByIioqaSWbzBzozHY3HLLS6AzGDFYnGEPHbKy2eyOQ7BU5+AJBY5XMJlBjPGouWIRRrZFJJWLvRAZBoMRrRJJhaIpBrRMIZSrRcEgbpQvqwwYI0Yokl08n46SyBTE2lkhkU1bUoz2+mMyy7VkHdwcnxci688ICoXJaLROXRMqxN5FRAJSoMeJPDKNFyVZPlJW6-W9GEDeHDRHI8abIRMmZzBYTAQaSlrYwAVSwADMkWNUTXy5Z2cdOeceaArgBaDKxQXNUWglKVP5xdMyhC5DITsJ-LItJKNVM5yF5-pwoYjdtmrv412k93dnamn1HLz+geXRDD5PRBXJG6amMglqLkFJIKzyVGElSVKm9yVFuu49NCB7GkWt6dmWVoyPI1ZlnWzrrM2bYlshSz4r2D5nNyz4IEkjwMJUKQ-l8SQZBGMaLsuq6xC4KQahxiqZDBBr5oeJonhwbqWhWhILKJjpYVSOGtsJqJSR6EjEScj5kUGCAZIBorabEGoZjGmaLjGiZNM0a7imkaSVHx+5GoWx74eaDrKZIaG2koSlOrJTbyc53lEb6fbqYGQ7xvyDCga0sSzuxSQJdKcYIKZDDmSBsRWRx6Z2XBDlHsWHYuVe55nky0L4ap-YaeFnzAWlKpytkXzZBksYfABQGgTU7Hakk2a6lgqAQHAwS5nlBZHn6pFhSEL4zuOabKpE35ys0jSLq+sUMKkKTxC0mWapqKS5Yak1Cc5ZWWNNAaDnNCCvpkE6ziCjQLZxSUfMOUpRbkwJSsq8QMRkp0CQhTlFVd0weRhSwyQ2N1PppoKNAqEY1FBCV7fyi6JCkO0WfpOSRGBDGg-BjmFaeKHiVWxJdvD1KIzV93KgqSR49EaaqlGES4xxBMgWmb19QxJ2dHqe4TYJiEKcVYnXSFM13VciS-JqUoGWUWRc0ki5gSuyZVMmKr8mUyrk-lF1FYFtNEl5l7kozhjM7NqvitR+mpOmSovdki4WTE24MQl2Xse0EvjWdMsQ2atuWNa6F2o70krL5rsq7KkQKvt+0pHK2oVPkyWB1z2naZRaThx0HRAA */
  id: "Login Form Machine",

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
    } 
  },

  context: {
    isEmailValid: true,
    emailFormInput: "",
    isPasswordValid: true,
    passwordFormInput: "",
    isSubmitEnabled: false,
  },

  states: {
    "Focused Email Input": {
      states: {
        "Showing Email Help Text": {
          on: {
            "Email Input Changed": {
              actions: "assignEmailInputToContext",
              target: "Hiding Email Help Text",
              cond: "Email is valid"
            },

            "Unfocused Email Input": "#Login Form Machine.Focused Email Input"
          }
        },

        "Hiding Email Help Text": {
          on: {
            "Email Input Changed": {
              actions: "assignEmailInputToContext",
              target: "Showing Email Help Text",
              cond: "Email is valid"
            },

            "Unfocused Email Input": "#Login Form Machine.Focused Email Input"
          }
        }
      },

      initial: "Hiding Email Help Text",

      on: {
        "Password Input Focused": "Focused Password Input"
      }
    },

    "Focused Password Input": {
      states: {
        "Hiding Password Help Text": {
          on: {
            "Password Input Changed": {
              actions: "assingPasswordInputToContext",
              target: "Showing Password Help Text",
              cond: "Password is valid"
            },

            "Unfocused Password Input": "#Login Form Machine.Focused Password Input"
          }
        },

        "Showing Password Help Text": {
          on: {
            "Password Input Changed": {
              actions: "assingPasswordInputToContext",
              target: "Hiding Password Help Text",
              cond: "Password is valid"
            },

            "Unfocused Password Input": "#Login Form Machine.Focused Password Input"
          }
        }
      },

      initial: "Hiding Password Help Text",

      on: {
        "Email Input Focused": "Focused Email Input"
      }
    }
  },

}, {
  guards: {
    "Email is valid": (context, event, guardMeta) => {
      console.log("guardMeta: ", guardMeta);
      if ((guardMeta.state.value as any)["Focused Email Input"] === "Hiding Email Help Text") {
        return event.value.length === 0; // show help text
      } else {
        return event.value.length !== 0; // hide help text
      }
    },
    "Password is valid": (context, event, guardMeta) => {
      console.log("guardMeta: ", guardMeta);
      if ((guardMeta.state.value as any)["Focused Password Input"] === "Hiding Password Help Text") {
        return event.value.length === 0; // show help text
      } else {
        return event.value.length !== 0; // hide help text
      }
    },
  },
  actions: {
    assignEmailInputToContext: assign((context, event) => {
      let emailValid = false;
      emailValid = event.value.length !== 0;

      let pwdValid = false;
      pwdValid = context.passwordFormInput.length !== 0;

      console.log("context: ", context);

      return {
        emailFormInput: event.value,
        isEmailValid: emailValid,
        isSubmitEnabled: emailValid && pwdValid,
      }
    }),
    assingPasswordInputToContext: assign((context, event) => {
      let passwordValid = false;
      passwordValid = event.value.length !== 0;

      let emailValid = false;
      emailValid = context.emailFormInput.length !== 0;

      console.log("context: ", context);

      return {
        passwordFormInput: event.value,
        isPasswordValid: passwordValid,
        isSubmitEnabled: passwordValid && emailValid,
      }
    })
  }
});