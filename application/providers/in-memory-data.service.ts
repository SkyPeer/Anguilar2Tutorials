import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Mr. Nice', telnumb: '+2 31232323-20', gender: 'M' },
            { id: 12, name: 'Narco', telnumb: '+3 231232323-12', gender: 'M' },
            { id: 13, name: 'Bombasto', telnumb: '+1 231232323-13', gender: 'M'},
            { id: 14, name: 'Celeritas', telnumb: '+4 231232323-14', gender: 'F'},
            { id: 15, name: 'Magneta', telnumb: '+7 231232323-15', gender: 'F'},
            { id: 16, name: 'RubberMan', telnumb: '+1 31232323-20', gender: 'A'},
            { id: 17, name: 'Dynama', telnumb: '+0 123231-17', gender: 'F'},
            { id: 18, name: 'Dr IQ', telnumb: '+0 1234567-18', gender: 'M'},
            { id: 19, name: 'Magma', telnumb: '+1 234347-19', gender: 'M'},
            { id: 20, name: 'Tornado', telnumb: '+2 31232323-20', gender: 'M'},

        ];
        return {heroes};
    }
}