import React from 'react';
import DrawerContent from '../../helps/navigation/DrawerContent.js';
import {createDrawerNavigator} from '@react-navigation/drawer';
//IMPORT ORANGE
import GenerateQrCode from '../../../src/screens/ORANGE/GenerateQrCode/GenerateQrCode.js';
import TransfertFlotte from '../../../src/screens/ORANGE/TranfertFlotte/TransfertFlotte.js';
import PaiementFactures from '../../../src/screens/ORANGE/PaiementFactures/PaiementFactures.js';
import AccepterPaiement from '../../../src/screens/ORANGE/AccepterPaiement/AccepterPaiement.js';
//IMPORT MTN
import MtnDepot from '../../../src/screens/MTN/Depot/MtnDepot.js';
import MtnRetrait from '../../../src/screens/MTN/Retrait/MtnRetrait.js';
import MtnConsulteSolde from '../../../src/screens/MTN/ConsulteSolde/MtnConsulteSolde.js';
import MyQrCode from '../../screens/MyQrCode.js';
import MtnTransfertFlotte from '../../../src/screens/MTN/TranfertFlotte/MtnTransfertFlotte.js';
import TransactionPageMtn from '../../../src/screens/MTN/TransactionsPageMtn/TransactionMtn.js';
import MtnPaiementFactures from '../../../src/screens/MTN/PaiementFactures/MtnPaiementFactures.js';
import MtnAccepterPaiement from '../../../src/screens/MTN/AccepterPaiement/MtnAccepterPaiement.js';
//OTHER IMPORT
import Profile from '../../screens/Profile.js';
import Home from '../../../src/screens/Home.js';
import Accueil from '../../../src/screens/Accueil/Accueil.js';
import Operations from '../../../src/screens/Operations.js';
import Transactions from '../../../src/screens/Transactions/Transactions.js';
import AjouterNumero from '../../../src/screens/AjouterNumero/AjouterNumero.js';
import TransactionPage from '../../../src/screens/TransactionPage/Transaction.js';
import InformationsUser from '../../../src/screens/InformationsUser/InformationsUser.js';
import InformationsUserExit from '../../../src/screens/InformationsUserExit/InformationsUserExit.js';
import {Dimensions} from 'react-native';

const Drawer = createDrawerNavigator();
let navigation_drawer_screen = [
  {name: 'Accueil', screen: Home},
  {name: 'Profile', screen: Profile},
  {name: 'MtnDepot', screen: MtnDepot},
  {name: 'MtnRetrait', screen: MtnRetrait},
  {name: 'Operations', screen: Operations},
  {name: 'Transactions', screen: Transactions},
  {name: 'AjouterNumero', screen: AjouterNumero},
  {name: 'MyQrCode', screen: MyQrCode},
  {name: 'TransfertFlotte', screen: TransfertFlotte},
  {name: 'TransactionPage', screen: TransactionPage},
  {name: 'MtnConsulteSolde', screen: MtnConsulteSolde},
  {name: 'PaiementFactures', screen: PaiementFactures},
  {name: 'InformationsUser', screen: InformationsUser},
  {name: 'AccepterPaiement', screen: AccepterPaiement},
  {name: 'MtnTransfertFlotte', screen: MtnTransfertFlotte},
  {name: 'TransactionPageMtn', screen: TransactionPageMtn},
  {name: 'MtnAccepterPaiement', screen: MtnAccepterPaiement},
  {name: 'MtnPaiementFactures', screen: MtnPaiementFactures},
  {name: 'InformationsUserExit', screen: InformationsUserExit},
];
const deviceWidth = Dimensions.get('window').width;
const settings = {
  contentComponent: DrawerContent,
  contentOptions: {
    activeTintColor: 'yellow',
  },
  //initialRouteName: 'Home',
  drawerWidth: deviceWidth - 0,
  drawerBackgroundColor: '#0D2251',
};

export const Drawers = () => (
  <Drawer.Navigator initialRouteName='Accueil' {...settings}>
    {navigation_drawer_screen.map((element, i) => (
      <Drawer.Screen key={i} name={element.name} component={element.screen} />
    ))}
  </Drawer.Navigator>
);
export default Drawers;
