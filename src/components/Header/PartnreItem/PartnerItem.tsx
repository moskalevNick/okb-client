import React from 'react';
import { partnerType } from '../../../types/partner';

import styles from './PartnerItem.module.css';

type PartnerItemType = {
  partner: partnerType;
};

const PartnerItem: React.FC<PartnerItemType> = ({ partner }) => {
  let logo;
  const fectlogo = async () => {
    logo = await fetch(partner.logo.publicUrl, { method: 'get' });
    return;
  };
  fectlogo();
  return (
    <>
      <div className={styles.partnreItem}>
        {logo}
        <div>{partner.text}</div>
      </div>
    </>
  );
};

export default PartnerItem;
