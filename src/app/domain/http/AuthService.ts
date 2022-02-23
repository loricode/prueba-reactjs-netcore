import { environment } from '../../../environments/environment';
import { HttpService } from './HttpService';

export class AuthService extends HttpService {
	private static _instance: AuthService;

	private constructor() {
		super(environment.baseUrl);
	}

	public static get auth(): HttpService {
		if (!AuthService._instance) {
			AuthService._instance = new AuthService();
		}
		return AuthService._instance;
	}
}
