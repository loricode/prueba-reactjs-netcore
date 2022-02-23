import { HttpService } from './HttpService';
import {environment} from '../../../environments/environment';

export class ProjectService extends HttpService {
	private static _instance: ProjectService;

	private constructor() {
		super(environment.baseUrl);
	}

	public static get service(): HttpService {
		if (!ProjectService._instance) {
			ProjectService._instance = new ProjectService();
		}
		return ProjectService._instance;
	}
}
