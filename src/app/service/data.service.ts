import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  doVerify(data) {

    // dev data
    const vo = {
      'id': null,
      'action': 'GET',
      'reminderProduct': null,
      'email': 'test@ontario.ca',
      'confirmEmail': null,
      'driverLicenceNumber': 'L22222222222222',
      'plateNumber': 'LLL22',
      'rin': '231352',
      'trilliumNumber': '1111111',
      'expiryDate': '20200130',
      'ownershipConfirmation': null,
      'registered': null,
      'reminderUserMap': {
        'DLRA': {
          'pid': '',
          'dlEnrolled': null,
          'vlEnrolled': null,
          'ccSecondary': null,
          'clientType': 'S2I',
          'emails': [
            {
              'id': null,
              'email': 'jason.li@ontario.ca',
              'emailType': 'PRI',
              'status': 'ACT'
            }
          ],
          'firstName': 'AAA',
          'langPref': 'EN',
          'lastName': 'AAA',
          'remindSchedule': '30'
        }
      }
    };
    vo.driverLicenceNumber = data.driverLicenceNumber;
    // vo.expiryDate = data.expiryDate;
    vo.email = data.email;
    vo.reminderUserMap.DLRA.emails[0].email = data.email;

    return this.http.post(environment.apiUrl, vo);
    // return this.http.post('http://10.160.200.137:8800/api/verify', data);
  }

  doSubmit(data) {
    return this.http.post('http://10.160.200.137:8800/api/submit', data);
  }
}
