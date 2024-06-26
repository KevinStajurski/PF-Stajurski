import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ILogin } from "../../core/models";

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        login: props<{ payload: ILogin }>(),
        logout: emptyProps()
    }
})