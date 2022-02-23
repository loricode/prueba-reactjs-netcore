import { AuthService } from './AuthService';
import { HttpService } from './HttpService';
import { ProjectService } from './ProjectService';

type HttpType = 'ProjectService' | 'AuthService';

export class HttpFactory {
	public static service(httpType: HttpType): HttpService {
		if (httpType === 'ProjectService') {
			return ProjectService.service;
		} else if (httpType === 'AuthService') {
			return AuthService.auth;
		} else {
			return ProjectService.service;
		}
	}
}
