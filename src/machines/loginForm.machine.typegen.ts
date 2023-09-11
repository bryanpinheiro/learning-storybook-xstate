
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          "email and password are invalid": "Validate";
"email and password are valid": "Validate";
"email is invalid": "Validate";
        };
        eventsCausingServices: {
          
        };
        matchesStates: "Invalid" | "Showing email and password help texts" | "Showing email help text" | "Showing password help text" | "Valid";
        tags: never;
      }
  