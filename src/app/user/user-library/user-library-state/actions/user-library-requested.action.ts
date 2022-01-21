import { createAction } from '@ngrx/store';
import { UserLibraryStateAction } from '../constants/user-state-action.enum';

export const userLibraryRequestedAction = createAction(UserLibraryStateAction.USER_LIBRARY_REQUESTED);
