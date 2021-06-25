import {Dimensions} from 'react-native';

const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;

export default {
  container: {
    height: Dev_Height,
    width: Dev_Width,
  },
  Image_Background_Style: {
    height: '100%',
    width: '100%',
  },
  Search_Box_View: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Search_Box: {
    height: '35%',
    width: '80%',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 15,
    color: '#FFF',
    paddingHorizontal: 15,
  },
  button_touch: {
    marginLeft: '5%',
    height: '35%',
    width: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Weather_Box_Main: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Weather_Holder_View: {
    height: '80%',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Weather_Image: {
    height: '50%',
    width: '30%',
  },
  main_details: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  temprature_value: {
    fontSize: 14,
    color: '#FFF',
    marginLeft: '5%',
  },
  temprature_text: {
    fontSize: 13,
    color: '#000',
    marginLeft: '1%',
  },
  city_value: {
    fontSize: 14,
    color: '#FFF',
    marginLeft: '5%',
    //marginTop: '3%',
  },
  city_text: {
    fontSize: 13,
    color: '#000',
    marginLeft: '1%',
    //marginTop: '3%',
  },
  Info_Box_View: {
    height: '45%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Info_Holder_Veiw: {
    height: '80%',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: 15,
  },
  Main_Weather_Text: {
    fontSize: 28,
    color: '#464646',
    marginLeft: '8%',
    marginTop: '8%',
    fontWeight: 'bold',
  },
  description_text: {
    fontSize: 20,
    color: '#121212',
    marginLeft: '8%',
    marginTop: '3%',
  },
  humidity_text: {
    fontSize: 18,
    color: '#121212',
    marginLeft: '8%',
    marginTop: '5%',
  },
  other_text: {
    fontSize: 18,
    color: '#121212',
    marginLeft: '8%',
    marginTop: '2%',
  },
};
