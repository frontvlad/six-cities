import { AuthorizationStatus, CheckAuthorization } from '../const/const';

export interface UserData {
    avatarUrl: string,
    email: string,
    id: number | null,
    isPro: boolean | null,
    name: string,
}

export interface UserSchema {
    isCheckAuthorization: CheckAuthorization;
    authorizationStatus: AuthorizationStatus;
    user: UserData;
    isLoading: boolean;
    error?: string;
}
