import GetLocation from 'react-native-get-location';

export default function getLocation() {
  return new Promise((resolve, reject) =>{
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        let data = {
          latitude: location.latitude,
          longitude: location.longitude,
        };
        resolve(data);
      })
      .catch(error => {
        const {code, message} = error;
        switch (code) {
          case 'UNAVAILABLE':
            alert(message);
            break;
          case 'UNAUTHORIZED':
            alert(message);
            break;
          case 'TIMEOUT':
            alert(message);
            break;
          default:
            console.log('a problem has occurred');
            break;
        }
      });
  });
}
