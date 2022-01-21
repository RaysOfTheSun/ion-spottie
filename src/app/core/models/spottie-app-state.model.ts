import { UserState } from 'src/app/user/providers/models/user-state.model';

export interface SpottieAppState<UL = any> {
  userLibrary: UL;
}
