import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export abstract class HttpService {
	protected constructor(private baseURL: string) {}

	private get _http() {
		return axios.create({
			baseURL: this.baseURL,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	public get<T>(
		serviceUrl: string,
		opts: AxiosRequestConfig = {}
	): Promise<AxiosResponse<T>> {
		return this._http.get<T>(serviceUrl, opts);
	}

	public post<T>(
		serviceUrl: string,
		data: any,
		opts: AxiosRequestConfig = {}
	): Promise<AxiosResponse<T>> {
		return this._http.post<T>(serviceUrl, data, opts);
	}

	public put<T>(
		serviceUrl: string,
		data: any,
		opts: AxiosRequestConfig = {}
	): Promise<AxiosResponse<T>> {
		return this._http.put<T>(serviceUrl, data, opts);
	}

	public delete<T>(
		serviceUrl: string,
		opts: AxiosRequestConfig = {}
	): Promise<AxiosResponse<T>> {
		return this._http.delete<T>(serviceUrl, opts);
	}
}
