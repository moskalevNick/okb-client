import React from 'react';
import { partnerType } from '../../../types/partner';

import styles from './PartnerItem.module.css';

type PartnerItemType = {
  partner: partnerType;
};

const PartnerItem: React.FC<PartnerItemType> = ({ partner }) => {
  return (
    <div className={styles.partnreItem}>
      <img src={partner.logo.publicUrl} alt={`partnerImage_${partner.id}`} />
      <div>{partner.text}</div>
    </div>
  );
};

export default PartnerItem;
