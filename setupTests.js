// https://www.npmjs.com/package/@jonny/react-native-mock

//require('@jonny/react-native-mock/mock');

//import 'jest-enzyme';


//npm i react-native-mock-render --save-dev
//require('react-native-mock-render/mock'); // <-- side-effects!!!

//jest.mock('react-native', () => require('react-native-mock-render'), {virtual: true})


console.log("setupTest loaded");

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });