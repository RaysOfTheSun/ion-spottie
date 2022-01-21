import { createFeatureSelector, Selector } from '@ngrx/store';
import { SpottieAppState } from 'src/app/core/models/spottie-app-state.model';
import { AppUserLibraryState } from '../models/app-user-library-state.model';

export const userLibrarySelector = createFeatureSelector<AppUserLibraryState>('userLibrary');
