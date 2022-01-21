import { createAction, props } from '@ngrx/store';
import { UserAction } from '../../../constants/user-action.enum';
import { UserLoggedInActionProps } from './user-logged-in-action-props.model';

export const userLoggedInAction = createAction(UserAction.USER_LOGGED_IN, props<UserLoggedInActionProps>());
