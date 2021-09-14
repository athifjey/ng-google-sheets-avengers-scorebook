export const characterAttributesMapping = {
  id: 'ID',
  name: 'Name',
  email: 'Email Address',
  contact: {
    _prefix: 'Contact ',
    street: 'Street',
    streetNumber: 'Street Number',
    zip: 'ZIP',
    city: 'City'
  },
  skills: {
    _prefix: 'Skill ',
    _listField: true
  }
};

export const sheet6AttributesMapping = {
  name: 'Batsmen',
  matches: 'Matches',
  innings: 'Innings',
  runs: 'Runs',
  balls: 'Balls',
  fours: '4s',
  sixers: '6s',
  notouts: 'Notouts',
  strikeRate: 'Strikerate',
  average: 'Average',
  thirties: '30s',
  fifties: '50s',
  hundreds: '100s'
};

export interface Character {
  id: string;
  name: string;
  email: string;
  contact: {
    street: string;
    streetNumber: string;
    zip: string;
    city: string;
  };
  skills: string[];
}
