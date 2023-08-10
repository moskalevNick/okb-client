import {
    PartnerAction,
    PartnerActionTypes,
    PartnerState,
} from '../../types/partner';

const initialState: PartnerState = {
    partner: [],
    loading: false,
    error: null,
};

export const partnerReduser = (
    state = initialState,
    action: PartnerAction
): PartnerState => {
    switch (action.type) {
      case PartnerActionTypes.FETCH_PARTNER:
        return { loading: true, error: null, partner: [] };
      case PartnerActionTypes.FETCH_PARTNER_SUCCESS:
        return { loading: false, error: null, partner: action.payload };
      case PartnerActionTypes.FETCH_PARTNER_ERROR:
        return { loading: false, error: action.payload, partner: [] };
      default:
        return state;
    }
};