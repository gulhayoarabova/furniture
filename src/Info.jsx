import React from 'react';
import { Collapse, Divider } from 'antd';
const text = `
Chiroyli dekoratsiya, yuqori sifatli to'qimachilik, tabiiy yog'ochdan foydalanish. Bu erda qat'iy shakllar yo'q, chiziqlar yumshoq, yumaloq, bir-biriga hamohangligi bilan ajralib turadi. Klassik uslub quyidagi asosiy turlarga bolinadi:
`;
const Info = () => (
  <>
    <Divider orientation="left">Mebel turlari</Divider>
    <Collapse
      items={[
        {
          key: '1',
          label: 'Barokko – uslubidagi yumshoq mebellar XIV asrining yaqin sharq saroy hashamatidir.',
          children: <p>{text}</p>,
        },
      ]}
    />
    <Divider orientation="left">Rokoko</Divider>

    <Collapse
      size="small"
      items={[
        {
          key: '1',
          label: 'Rokoko – sharqona naqshlardan, xitoycha bezaklardan foydalanilgan uslub. Rokoko uslubi 18-asrning birinchi yarmida paydo bolgan.',
          children: <p>{text}</p>,
        },
      ]}
    />
        <Divider orientation="left">Neoklassitizm</Divider>

    <Collapse
      size="large"
      items={[
        {
          key: '1',
          label: 'Neoklassitizm – bilan binolarni loyihalashda vazminlik va aniqlik keladi. Neoklassik uslubdagi yumshoq mebellar vizual yengillik va muvozanat bilan ajralib turadi.',
          children: <p>{text}</p>,
        },
      ]}
    />
  </>
);
export default Info;