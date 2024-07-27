type ApiBibleProps = {
  id: string;
  dblId: string;
  relatedDbl: null;
  name: string;
  nameLocal: string;
  abbreviation: string;
  abbreviationLocal: 'KJV';
  description: 'Ecumenical';
  descriptionLocal: 'Ecumenical';
  language: {
    id: 'eng';
    name: string;
    nameLocal: 'English';
    script: 'Latin';
    scriptDirection: 'LTR';
  };
  countries: [
    {
      id: 'GB';
      name: string;
      nameLocal: string;
    },
  ];
  type: 'text';
  updatedAt: string;
  copyright: string;
  info: string;
  audioBibles: string[];
};
