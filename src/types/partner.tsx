export type logoType = {
    id: string;
    path: string;
    publicUrl: string;
    partnerId: string;
}

export type partnerType = {
    id: string;
    text: string;
    logo: logoType;
}

export interface PartnerState {
    partner: partnerType[];
    loading: boolean;
    error: null | string;
}

export enum PartnerActionTypes {
    FETCH_PARTNER = 'FETCH_PARTNER',
    FETCH_PARTNER_SUCCESS = 'FETCH_PARTNER_SUCCESS',
    FETCH_PARTNER_ERROR = 'FETCH_PARTNER_ERROR',
}

interface FetchPartnerAction {
    type: PartnerActionTypes.FETCH_PARTNER;
}
  
  interface FetchPartnerSuccessAction {
    type: PartnerActionTypes.FETCH_PARTNER_SUCCESS;
    payload: any[];
}
  
  interface FetchPartnerErrorAction {
    type: PartnerActionTypes.FETCH_PARTNER_ERROR;
    payload: string;
}

export type PartnerAction =
  | FetchPartnerAction
  | FetchPartnerSuccessAction
  | FetchPartnerErrorAction;